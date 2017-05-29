+ ~~figour out the how file path working in native script (relative path seems relative to app folder?)~~ 

    fixed. paths in navtive script are relative to `app/`, to fixed it add `moduleId: module.id` in component's metadata. [ref here](https://github.com/NativeScript/NativeScript/issues/545)
+ ~~add global event handler~~
    
    done
+ to finish module list page
    + detail view
    + redirect function
    + handle html