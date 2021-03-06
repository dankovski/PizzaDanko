from django.urls import path
from . import views
from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token, refresh_jwt_token

urlpatterns = [
    path('csrf', views.csrf),
    path("sing_up", views.sing_up, name="sing_up"),
    path("message", views.valid_message, name="valid_message"),
    path("food", views.get_food_data, name="get_food_data"),
    path("food/<int:id>", views.get_food_data_from_id, name="get_food_data_from_id"),
    path('token', obtain_jwt_token),
    path('token/verify', verify_jwt_token),
    path('logout', views.logout, name="logout"),
    path('valid_user', views.valid_user, name="valid_user"),
    path('order', views.order, name="order"),
    path('token/refresh', refresh_jwt_token),
#^address_edit/(\d+)/$
]