from django.db import models

class UserDetail(models.Model):
    Name = models.CharField(max_length=255)
    Address = models.CharField(max_length=255)
    Phone_Number = models.CharField(max_length=15)
    Content = models.TextField()
    Image_1 = models.URLField(default="https://i.pinimg.com/736x/76/f3/f3/76f3f3007969fd3b6db21c744e1ef289.jpg" ,blank=True)
    Image_2 = models.URLField(default="https://i.pinimg.com/736x/76/f3/f3/76f3f3007969fd3b6db21c744e1ef289.jpg" ,blank=True)
    Image_3 = models.URLField(default="https://i.pinimg.com/736x/76/f3/f3/76f3f3007969fd3b6db21c744e1ef289.jpg" ,blank=True)
    Image_4 = models.URLField(default="https://i.pinimg.com/736x/76/f3/f3/76f3f3007969fd3b6db21c744e1ef289.jpg" ,blank=True)
    Image_5 = models.URLField(default="https://i.pinimg.com/736x/76/f3/f3/76f3f3007969fd3b6db21c744e1ef289.jpg" ,blank=True)
    
    def __str__(self):
        return self.Name