from rest_framework import serializers

from rest_framework import serializers
from zenia_app_root.geometries_management.models import Sphere

class SphereSerializer(serializers.ModelSerializer):
    prompt_message=serializers.CharField()
    class Meta:
        
        model = Sphere
        fields = ['id', 'radius', 'color', 'material', 'created_at', 'updated_at','prompt_message']
