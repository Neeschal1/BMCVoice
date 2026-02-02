from django.urls import path
from .views import *

urlpatterns = [
    path('', account, name='account'),
    path('create/', UserAccountSignupSerializersCreateView.as_view(), name='UserAccountSignupSerializersCreateView'),
    path('list/', UserAccountSignupSerializersListView.as_view(), name='UserAccountSignupSerializersListView'),
    path('destroy/', UserAccountSignupSerializersDestroyView.as_view(), name='UserAccountSignupSerializersDestroyView'),
]
