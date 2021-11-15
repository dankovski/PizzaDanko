from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout


from PizzaApp.models import Food

# Create your views here.

def index(response):
    return HttpResponse("<h1>index</h1>")


def log_in(request):
    username = request.POST['username']
    # email = request.POST['email']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        print(f"User {username} succesfully login")
        # Redirect to a success page.
    else:
        # Return an 'invalid login' error message.
        print("Cant login")


def log_out(request):
    logout(request)
    print("Logout")
    # Redirect to a success page.

def sing_up(request):
    username = request.POST['username']
    email = request.POST['email']
    password = request.POST['password']
    user = User.objects.create_user(username, email, password)
    user.save()
    print(f"User {username} created")

def get_food_data(request):
    #data = Food.objects.all()
    data=list(Food.objects.values())
    return JsonResponse(data, safe=False)
    #return JsonResponse(data)