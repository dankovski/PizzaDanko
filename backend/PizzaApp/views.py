from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from PizzaApp.models import Food
from PizzaApp.models import Message
from django.http import HttpResponseRedirect
from django.middleware.csrf import get_token
import json
import re

regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')


def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})


def log_in(request):
    if request.method == "POST":
        post_data = json.loads(request.body.decode("utf-8"))
        username = post_data.get('username')
        password = post_data.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'success': f"User {username} succesfully login"}, safe=False)
        else:
            return JsonResponse({'error': "Incorrect login or password"}, safe=False)


def log_out(request):
    logout(request)
    print("Logout")
    # Redirect to a success page.


def sing_up(request):

    if request.method == "POST":
        post_data = json.loads(request.body.decode("utf-8"))
        email = post_data.get("email")
        password = post_data.get("password")
        password1 = post_data.get("password1")

        error = {}

        error['errors'] = {}

        #email validation
        if User.objects.filter(email=email):
            error['errors']['emailError'] = "Email already exists"

        else:
            if not re.fullmatch(regex, email):
                error['errors']['emailError'] =  "Email incorrect"

        #password validation
        if len(password) < 6:
            error['errors']['passwordError'] = "Password too short"

        #password1 validation
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


@csrf_exempt
def valid_message(request):
    if request.method == "POST":
        fullname = request.POST.get('fullname')
        email = request.POST.get('email')
        message = request.POST.get('message')

        object = Message(fullname=fullname, email=email, message=message)
        object.save()

        return HttpResponseRedirect('http://localhost:3000/thanks')

