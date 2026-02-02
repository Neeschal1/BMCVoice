from django.http import HttpResponse
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework import generics
from .serializers import *
from ..services.signup import signup_an_account
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser


# View for creating user accounts
class UserAccountSignupSerializersCreateView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = UserAccountSignupSerializers(data = request.data)
        serializer.is_valid(raise_exception=True)
        return signup_an_account(serializer)
    
# View for listing user accounts
class UserAccountSignupSerializersListView(generics.ListAPIView):
    permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserAccountSignupSerializers
    
# View for destroying user accounts
class UserAccountSignupSerializersDestroyView(generics.DestroyAPIView):
    permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserAccountSignupSerializers
    
# View for logging in an account
        
    
# # View for listing user accounts
# class UserAccountSignupSerializersListView(generics.ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserAccountSignupSerializers
    
# # View for deleting user account
# class UserAccountSignupSerializersDestroyView(generics.DestroyAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserAccountSignupSerializers


def account(request):
    return HttpResponse("Hi, this is account section. Thank you!")