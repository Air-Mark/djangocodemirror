# -*- coding: utf-8 -*-
"""
DjangoCodeMirror template tags and filters
"""
import json

from django import template
from django.conf import settings
from django.utils.encoding import force_unicode
from django.utils.safestring import mark_safe

register = template.Library()

def djangocodemirror_init_input(field):
    """
    Return the djangocodemirror field settings as a JSON string
    
    This can only be used on a field that have allready been rendered.
    
    Usage : ::
    
        {% load djangocodemirror_inputs %}
        
        <script type="text/javascript">
        //<![CDATA[
            $(document).ready(function() {
                var myfield_codemirror_instance = $('#myfield').djangocodemirror({{ form.myfield|djangocodemirror_init_input }});
            });
        //]]>
        </script>

    """
    field_settings = field.field.widget._field_settings_cache
    if field_settings is None:
        field_settings = {}
    return mark_safe( json.dumps(field_settings) )
djangocodemirror_init_input.is_safe = True
register.filter(djangocodemirror_init_input)
