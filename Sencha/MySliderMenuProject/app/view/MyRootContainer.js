/*
 * File: app/view/MyRootContainer.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MySliderMenuApp.view.MyRootContainer', {
    extend: 'Ext.Container',

    requires: [
        'MySliderMenuApp.view.MyFacebookContainer',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.TitleBar'
    ],

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'toolbar',
                docked: 'bottom',
                title: '',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'mybutton',
                        iconCls: 'more',
                        text: ''
                    }
                ]
            },
            {
                xtype: 'container'
            },
            {
                xtype: 'container',
                itemId: 'myMainContainer',
                layout: 'card',
                items: [
                    {
                        xtype: 'container',
                        html: 'News',
                        itemId: 'myNewsContainer',
                        items: [
                            {
                                xtype: 'titlebar',
                                docked: 'top',
                                title: 'Container 1'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        itemId: 'myMusicContainer',
                        items: [
                            {
                                xtype: 'titlebar',
                                docked: 'top',
                                title: 'Container 2'
                            }
                        ]
                    },
                    {
                        xtype: 'myfacebookcontainer'
                    }
                ]
            }
        ]
    }

});