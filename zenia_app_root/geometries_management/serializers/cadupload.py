from rest_framework import serializers
from zenia_app_root.geometries_management.models import CadModelUpload

class NumberCadSerializer(serializers.ModelSerializer):
    class Meta:
        model = CadModelUpload
        fields = ['stl_file_upload']
        
