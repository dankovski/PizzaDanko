from django.urls import path
from django.views.generic import TemplateView
from . import views


urlpatterns = [
    path("login", views.log_in, name="log_in"),
    path("logout", views.log_out, name="log_out"),
    path("singup", views.sing_up, name="sing_up"),
    path("message", views.valid_message, name="valid_message"),
    path("get_food_data", views.get_food_data, name="get_food_data"),
]