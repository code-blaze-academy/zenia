from rest_framework import serializers
from zenia_app_root.geometries_management.models import Rectangle

class RectangleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rectangle
        fields = ['id', 'length', 'width', 'color', 'material', 'created_at', 'updated_at']
