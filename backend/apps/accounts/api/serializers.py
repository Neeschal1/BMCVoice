from rest_framework import serializers
from django.contrib.auth.models import User

# User account signup model
class UserAccountSignupSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'username', 'password', 'is_active']
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
            'email': {'required': True},
            'username': {'required': True},
            'password': {'required': True, 'write_only': True},
            'is_active': {'read_only': True},
        }
        

# User account login model
class UserAccountLoginSerializers(serializers.Serializer):
    Email = serializers.EmailField()
    Password = serializers.CharField()