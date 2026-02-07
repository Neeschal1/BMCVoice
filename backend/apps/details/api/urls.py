from django.urls import path
from .views import *

urlpatterns = [
    path('', details, name='details'),
    path('create/', UserDetailSerializerCreateView.as_view(), name='UserDetailSerializerCreateView'),
    path('list/', UserDetailSerializerListView.as_view(), name='UserDetailSerializerListView'),
    path('delete/<int:pk>/', UserDetailSerializerDeleteView.as_view(), name='UserDetailSerializerDeleteView'),
]