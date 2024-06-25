from rest_framework import serializers
from zenia_app_root.geometries_management.models import Cube

class CubeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cube
        fields = ['id', 'edge_length', 'color', 'material', 'created_at', 'updated_at']