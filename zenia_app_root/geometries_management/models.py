from django.db import models
class Sphere(models.Model):
    radius = models.FloatField()
    color = models.CharField(max_length=100, null=True, blank=True)
    material = models.CharField(max_length=100, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Sphere with radius {self.radius}"

class Cube(models.Model):
    edge_length = models.FloatField()
    color = models.CharField(max_length=100, null=True, blank=True)
    material = models.CharField(max_length=100, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Cube with edge length {self.edge_length}"

class Rectangle(models.Model):
    length = models.FloatField()
    width = models.FloatField()
    color = models.CharField(max_length=100, null=True, blank=True)
    material = models.CharField(max_length=100, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Rectangle with length {self.length} and width {self.width}"


class Cone(models.Model):
    radius = models.FloatField()
    height = models.FloatField()
    color = models.CharField(max_length=100, null=True, blank=True)
    material = models.CharField(max_length=100, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Cone with radius {self.radius} and height {self.height}"
    
class MessagePromptModel(models.Model):
    message_body=models.TextField(null=True,blank=True)
    
    def __str__(self):
        return str(self.message_body)
    


class CadModelUpload(models.Model):
    stl_file_upload=models.FileField(upload_to="home/zenia_user/zenia/threedmodels/modification/")
    
    def __str__(self):
        return str(self.message_body)