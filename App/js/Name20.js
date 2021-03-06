// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support async functions
xui.Class('App.Name20', 'xui.Module',{
    Instance:{
        // Dependencies css
        Dependencies: [],
        // Required modules
        Required:[],
        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"xui_ui_layout11")
                .setItems([
                    {
                        "id" : "before",
                        "pos" : "before",
                        "min" : 10,
                        "size" : 80,
                        "locked" : false,
                        "folded" : true,
                        "hidden" : false,
                        "cmd" : true
                    },
                    {
                        "id" : "main",
                        "min" : 10,
                        "size" : 80
                    },
                    {
                        "id" : "after",
                        "pos" : "after",
                        "cmd" : false,
                        "min" : 10,
                        "size" : 80,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setType("horizontal")
            );
            
            host.xui_ui_layout11.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs6")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "status 1"
                    },
                    {
                        "id" : "b",
                        "caption" : "status 2"
                    },
                    {
                        "id" : "c",
                        "caption" : "status 3"
                    },
                    {
                        "id" : "d",
                        "caption" : "status 4"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("a"),
                "main"
            );
            
            host.xui_ui_tabs6.append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel6")
                .setDock("none")
                .setLeft("16.761904761904763em")
                .setTop("13.714285714285714em")
                .setWidth("18em")
                .setHeight("18em")
                .setCaption("Foldable Panel")
                .setToggleBtn(true)
                .setCloseBtn(true)
                .setRefreshBtn(true),
                "a"
            );
            
            host.xui_ui_tabs6.append(
                xui.create("xui.UI.Stacks")
                .setHost(host,"xui_ui_stacks1")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "page1",
                        "imageClass" : "xui-icon-xui"
                    },
                    {
                        "id" : "b",
                        "caption" : "page2"
                    },
                    {
                        "id" : "c",
                        "caption" : "page3"
                    },
                    {
                        "id" : "d",
                        "caption" : "page4",
                        "closeBtn" : true,
                        "optBtn" : "xui-uicmd-opt",
                        "popBtn" : true
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("a"),
                "a"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        // To determine how properties affects this module
        propSetAction : function(prop){
        }
    },
    // export
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        },
        $Functions:{
        }
    }
});