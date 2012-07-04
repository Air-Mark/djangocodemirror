/*
* Settings for DjangoCodeMirror buttons bar
*/
DCM_Buttons_settings = [
    {name:'Maximize', classname: 'buttonFullscreenEnter', funcname:"maximize_editor", method:"internal" },
    {name:'Normal size', classname: 'buttonFullscreenExit', funcname:"normalize_editor", method:"internal" },
    {separator:true},
    {name:'Quick save', classname: 'buttonQuickSave', key:'S', funcname:"content_quicksave", method:"internal" },
    {separator:true},
    {name:'Undo', classname: 'buttonUndo', funcname:"do_undo", method:"internal" },
    {name:'Redo', classname: 'buttonRedo', funcname:"do_redo", method:"internal" },
    {separator:true},
    {name:'Title level 1', classname: 'buttonH1', key:'1', char:'=', placeholder:'Your title', funcname:"title" },
    {name:'Title level 2', classname: 'buttonH2', key:'2', char:'*', placeholder:'Your title', funcname:"title" },
    {name:'Title level 3', classname: 'buttonH3', key:'3', char:'-', placeholder:'Your title', funcname:"title" },
    {separator:true},
    {name:'Bold', classname: 'buttonBold', key:'B', placeholder:'Your value', begin_with:'**', close_with:'**', move_cursor_char:1 },
    {name:'Italic', classname: 'buttonItalic', key:'I', placeholder:'Your value', begin_with:'*', close_with:'*', move_cursor_char:1 },
    {name:'Inline code', classname: 'buttonCode', key:'T', placeholder:'Your value', begin_with:'``', close_with:'``', move_cursor_char:1 },
    {separator:true},
    {name:'External link', classname: 'buttonLink', key:'A', placeholder:'http://perdu.com', funcname:"link", move_cursor_char:1 },
    {name:'Internal link to a Page document', classname: 'buttonPageLink', key:'W', placeholder:'slug', begin_with:':page:`', close_with:'`', move_cursor_char:1 },
    {separator:true},
    {name:'Substitution image', classname: 'buttonSubPicture', begin_with:'\n.. |', close_with:'| image:: Your image link\n', placeholder:'slugname'},
    {name:'Simple image block', classname: 'buttonPicture', begin_with:'.. image:: ', close_with:'\n', placeholder:'Your image link'},
    {name:'Annoted image block', classname: 'buttonFigure', begin_with:'.. figure:: ', close_with:'\n', placeholder:'Your image link'},
    {separator:true},
    {name:'Bullet list', classname: 'buttonBList', key:'L', funcname:"bulletlist", placeholder:'Item' },
    {name:'Enumerated List', classname: 'buttonNList', funcname:"numberedlist", placeholder:'Item' },
    {separator:true},
    {name:'Cite', classname: 'buttonQuotes', begin_with:'    ', placeholder:'Your value', funcname:"cite"},
    {name:'Block code', classname: 'buttonSourcecode', placeholder:'Your value', funcname:"sourcecode" },
    {separator:true},
    {name:'Help', classname: 'buttonHelp', funcname:"externalressource" }
    //{name:'Settings', classname: 'buttonSettings', funcname:"settings_panel", method:"internal" }
];
