Ext.require('Ext.chart.*');

Ext.define('Test.view.main.ChartDisplay', {
    extend: 'Ext.Panel',
    alias: 'chartDisplay',

    title: 'Chart',

    xtype: 'chartDisplay',

    tbar: [
        '->',
        {
            text: 'Load',
            handler: 'onLoadChartRender'
        },
        {
            text: 'Preview',
            handler: 'onPreview'
        }
    ],
});
