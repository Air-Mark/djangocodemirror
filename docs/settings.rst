
Default app settings
====================

.. note::
    Every file paths (as in ``settings.CODEMIRROR_BASE_JS``,
    ``settings.CODEMIRROR_BASE_CSS``, ``settings.CODEMIRROR_THEMES``,
    ``settings.CODEMIRROR_MODES``, etc..) must be relative to the static
    directory.

CODEMIRROR_FIELD_INIT_JS
------------------------

Template string for HTML Code to instanciate CodeMirror for a field.

Default value: ::

    <script>var {varname} = CodeMirror.fromTextArea(document.getElementById("{inputid}"),{settings});</script>

Contains two template variables:

* ``varname``: A Javascript variable name which will be set with the CodeMirror
  instance;
* ``inputid``: HTML element id;
* ``settings``: JSON string for CodeMirror parameters.


CODEMIRROR_SETTINGS
-------------------

Available CodeMirror configurations.

Included configurations implement a little subset of available
CodeMirror modes plus a ``empty`` configuration.

Default available configurations are:

* ``css``;
* ``django``;
* ``empty``;
* ``html``;
* ``javascript``;
* ``python``;
* ``restructuredtext``;
* ``scss``;

These modes are built from
`CodeMirror mode demonstrations <http://codemirror.net/mode/index.html>`_ to
reproduce the same behaviors.

See :ref:`configurations-intro` to create new configurations.

CODEMIRROR_BASE_JS
------------------

List of CodeMirror Javascript base files that will be loaded before every
other CodeMirror Javascript components.

Default value:

.. sourcecode:: python

    ["CodeMirror/lib/codemirror.js"]


CODEMIRROR_BASE_CSS
-------------------

List of CodeMirror CSS base files that will be loaded before themes.

Default value:

.. sourcecode:: python

    ["CodeMirror/lib/codemirror.css"]

CODEMIRROR_THEMES
-----------------


Available CodeMirror CSS Theme files.

Default value contains only the *Ambiance* theme (a dark one), so you may add
yourself all your needed themes.

Default value:

.. sourcecode:: python

    {
        "ambiance": "CodeMirror/theme/ambiance.css",
    }


CODEMIRROR_MODES
----------------

Available CodeMirror Javascript mode files.

Default shipped modes are built from default configurations requirements.


CODEMIRROR_JS_ASSET_TAG
-----------------------

HTML element to load a Javascript asset. Used by template tags and widget to
build assets HTML loaders.

Default value:

.. sourcecode:: python

    u'<script type="text/javascript" src="{url}"></script>'

CODEMIRROR_CSS_ASSET_TAG
------------------------

HTML element to load a CSS asset. Used by template tags and widget to
build assets HTML loaders.

Default value:

.. sourcecode:: python

    u'<link rel="stylesheet" href="{url}">'


CODEMIRROR_BUNDLE_CSS_NAME
--------------------------

Template string for Javascript bundle names where ``{settings_name}`` will
be filled with the configuration name.

Default value: ::

    "dcm-{settings_name}_css"


CODEMIRROR_BUNDLE_JS_NAME
-------------------------

Template string for CSS bundle names where ``{settings_name}`` will be
filled with the configuration name.

Default value: ::

    "dcm-{settings_name}_js"


CODEMIRROR_BUNDLE_CSS_OPTIONS
-----------------------------

Option arguments used to build CSS bundles with ``django-assets``.

Every CSS bundles will share the same arguments (excepted for the ``output``
one).

Default value:

.. sourcecode:: python

    {
        'filters':'yui_css',
        'output':'css/dcm-{settings_name}.min.css',
    }


CODEMIRROR_BUNDLE_JS_OPTIONS
----------------------------

Option arguments used to build Javascript bundles with ``django-assets``.

Every Javascript bundles will share the same arguments (excepted for the
``output`` one).

Default value:

.. sourcecode:: python

    {
        'filters':'yui_js',
        'output':'js/dcm-{settings_name}.min.js',
    }
