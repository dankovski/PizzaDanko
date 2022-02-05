from django.urls import path
from . import views
from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token, refresh_jwt_token

urlpatterns = [
    path('csrf', views.csrf),
    path("sing_up", views.sing_up, name="sing_up"),
    path("message", views.valid_message, name="valid_message"),
    path("food", views.get_food_data, name="get_food_data"),
    path('token', obtain_jwt_token),
    path('token/verify', verify_jwt_token),
    path('token/refresh', refresh_jwt_token)
]