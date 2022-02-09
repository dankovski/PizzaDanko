from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from PizzaApp.models import Food
from PizzaApp.models import Message
from django.http import HttpResponseRedirect
from django.middleware.csrf import get_token
import json
import re
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.csrf import requires_csrf_token
from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer
from rest_framework import status
from django.core import serializers
from django.forms.models import model_to_dict


regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')

def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
        'username': user.username,
        'email': user.email
    }


def valid_user(request):
    if request.method == "GET":

        token = request.COOKIES.get('jwt-access-token')

        try:
            data = {'token': token}
            valid_data = VerifyJSONWebTokenSerializer().validate(data)

            user = valid_data['user']
            return JsonResponse({'username': str(user)}, status=status.HTTP_200_OK)
        except:
            return JsonResponse({'status': "not logged"},  status=status.HTTP_200_OK)


def csrf(request):
    response = JsonResponse({'csrfToken': get_token(request)})
    response.set_cookie('csrftoken', get_token(request))
    return response

def logout(request):
    response = JsonResponse({'status': "ok"})
    response.set_cookie('jwt-access-token', max_age=0)
    return response

@api_view(['POST'])
@permission_classes((IsAuthenticated, ))
@authentication_classes((JSONWebTokenAuthentication,))
@csrf_protect
def order(request):
    if request.method == "POST":
        post_data = request.data
        print(len(post_data))

        cost = 0

        for food in post_data:
            cost += food["quantity"] * Food.objects.get(id=str(food["id"])).cost
        print(cost)

        return JsonResponse({"cost": cost})


@csrf_protect
def sing_up(request):
    if request.method == "POST":
        post_data = json.loads(request.body.decode("utf-8"))
        email = post_data.get("email")
        password = post_data.get("password")
        password1 = post_data.get("password1")

        error = {}

        error['errors'] = {}

        # email validation
        if User.objects.filter(email=email):
            error['errors']['emailError'] = "Email already exists"

        else:
            if not re.fullmatch(regex, email):
                error['errors']['emailError'] = "Email incorrect"

        # password validation
        if len(password) < 6:
            error['errors']['passwordError'] = "Password too short"

        # password1 validation
        if password != password1:
            error['errors']['password1Error'] = "Password doesn't match"

        if error['errors']:
            print(error['errors'])
            return JsonResponse(error, safe=False)
        else:
            print("no errors")

            response = {"response": "User created"}

            user = User.objects.create_user(email, email, password)
            user.save()

            return JsonResponse(response, safe=False)


def get_food_data(request):
    data = list(Food.objects.values())
    return JsonResponse(data, safe=False)

def get_food_data_from_id(request, id):


    dict_obj = model_to_dict( Food.objects.get(id=id) )
    print(dict_obj)
    print(dict_obj.get("photo"))
    dict_obj.update( {"photo": str(dict_obj.get("photo"))} )

    return JsonResponse( dict_obj, safe=False)



# @api_view(['POST'])
# @permission_classes((IsAuthenticated, ))
# @authentication_classes((JSONWebTokenAuthentication,))
@csrf_protect
def valid_message(request):
    if request.method == "POST":

        post_data = json.loads(request.body.decode("utf-8"))
        email = post_data.get("email")
        fullname = post_data.get("fullname")
        message = post_data.get("message")

        object = Message(fullname=fullname, email=email, message=message)
        object.save()

        return JsonResponse({"status": "ok"}, safe=False)

