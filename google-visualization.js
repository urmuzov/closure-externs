/**
 * @namespace
 */
var google;

/**
 *
 * @param {string} name
 * @param {string} version
 * @param {Object=} opt_params
 */
google.load = function(name, version, opt_params) {};

/**
 *
 * @param {Function} callback
 */
google.setOnLoadCallback = function(callback){};

/**
 * @namespace
 */
google.visualization;

/**
 * @enum string
 */
google.visualization.DataTableColumnType = {
    STRING: 'string',
    NUMBER: 'number',
    BOOLEAN: 'boolean',
    DATE: 'date',
    DATETIME: 'datetime',
    TIMEOFDAY: 'timeofday'
};

/**
 * @constructor
 * @param {Object=} opt_data
 * @param {string=} opt_version
 */
google.visualization.DataTable = function(opt_data, opt_version) {};

/**
 *
 * @param {google.visualization.DataTableColumnType|string} type
 * @param {string=} opt_label
 * @param {string=} opt_id
 * @return {number}
 */
google.visualization.DataTable.prototype.addColumn = function(type, opt_label, opt_id){};

/**
 *
 * @param {Array} opt_cellArray
 * @return {number}
 */
google.visualization.DataTable.prototype.addRow = function(opt_cellArray){};

/**
 *
 * @param {number|Array} numOrArray
 * @return {number}
 */
google.visualization.DataTable.prototype.addRows = function(numOrArray){};

/**
 * @return {google.visualization.DataTable}
 */
google.visualization.DataTable.prototype.clone = function(){};

/**
 *
 * @param {number} columnIndex
 * @return {string}
 */
google.visualization.DataTable.prototype.getColumnId = function(columnIndex){};

/**
 *
 * @param {number} columnIndex
 * @return {string}
 */
google.visualization.DataTable.prototype.getColumnLabel = function(columnIndex){};

/**
 *
 * @param {number} columnIndex
 * @return {string}
 */
google.visualization.DataTable.prototype.getColumnPattern = function(columnIndex){};

/**
 *
 * @param {number} columnIndex
 * @return {Object}
 */
google.visualization.DataTable.prototype.getColumnProperties = function(columnIndex){};

/**
 *
 * @param {number} columnIndex
 * @param {string} name
 * @return {*}
 */
google.visualization.DataTable.prototype.getColumnProperty = function(columnIndex, name){};

/**
 *
 * @param {number} columnIndex
 * @return {{min:?*, max:?*}}
 */
google.visualization.DataTable.prototype.getColumnRange = function(columnIndex){};

/**
 *
 * @param {number} columnIndex
 * @return {google.visualization.DataTableColumnType}
 */
google.visualization.DataTable.prototype.getColumnType = function(columnIndex){};

/**
 *
 * @param {number} columnIndex
 * @return {Array.<*>}
 */
google.visualization.DataTable.prototype.getDistinctValues = function(columnIndex){};

/**
 *
 * @param {Array} filters
 * @return {Array.<number>}
 */
google.visualization.DataTable.prototype.getFilteredRows = function(filters){};

/**
 *
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @return {string}
 */
google.visualization.DataTable.prototype.getFormattedValue = function(rowIndex, columnIndex){};

/**
 * @return {number}
 */
google.visualization.DataTable.prototype.getNumberOfColumns = function(){};

/**
 * @return {number}
 */
google.visualization.DataTable.prototype.getNumberOfRows = function(){};

/**
 *
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @return {Object}
 */
google.visualization.DataTable.prototype.getProperties = function(rowIndex, columnIndex){};

/**
 *
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @param {string} name
 * @return {*}
 */
google.visualization.DataTable.prototype.getProperty = function(rowIndex, columnIndex, name){};

/**
 *
 * @param {number} rowIndex
 * @return {Object}
 */
google.visualization.DataTable.prototype.getRowProperties = function(rowIndex){};

/**
 *
 * @param {number} rowIndex
 * @param {string} name
 * @return {*}
 */
google.visualization.DataTable.prototype.getRowProperty = function(rowIndex, name){};

/**
 *
 * @param {*} sortColumns
 * @return {Array.<number>}
 */
google.visualization.DataTable.prototype.getSortedRows = function(sortColumns){};

/**
 * @return {Object}
 */
google.visualization.DataTable.prototype.getTableProperties = function(){};

/**
 *
 * @param {string} name
 * @return {*}
 */
google.visualization.DataTable.prototype.getTableProperty = function(name){};

/**
 *
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @return {string|number|boolean|Date|Array|null}
 */
google.visualization.DataTable.prototype.getValue = function(rowIndex, columnIndex){};

/**
 *
 * @param {number} columnIndex
 * @param {string} type
 * @param {string=} opt_label
 * @param {string=} opt_id
 */
google.visualization.DataTable.prototype.insertColumn = function(columnIndex, type, opt_label, opt_id){};

google.visualization.DataTable.prototype.insertRows = function(rowIndex, numberOrArray){};

google.visualization.DataTable.prototype.removeColumn = function(columnIndex){};

google.visualization.DataTable.prototype.removeColumns = function(columnIndex, numberOfColumns){};

google.visualization.DataTable.prototype.removeRow = function(rowIndex){};

google.visualization.DataTable.prototype.removeRows = function(rowIndex, numberOfRows){};

google.visualization.DataTable.prototype.setCell = function(rowIndex, columnIndex, opt_value, opt_formattedValue, opt_properties){};

google.visualization.DataTable.prototype.setColumnLabel = function(columnIndex, label){};

google.visualization.DataTable.prototype.setColumnProperty = function(columnIndex, name, value){};

google.visualization.DataTable.prototype.setColumnProperties = function(columnIndex, properties){};

google.visualization.DataTable.prototype.setFormattedValue = function(rowIndex, columnIndex, formattedValue){};

google.visualization.DataTable.prototype.setProperty = function(rowIndex, columnIndex, name, value){};

google.visualization.DataTable.prototype.setProperties = function(rowIndex, columnIndex, properties){};

google.visualization.DataTable.prototype.setRowProperty = function(rowIndex, name, value){};

google.visualization.DataTable.prototype.setRowProperties = function(rowIndex, properties){};

google.visualization.DataTable.prototype.setTableProperty = function(name, value){};

google.visualization.DataTable.prototype.setTableProperties = function(properties){};

google.visualization.DataTable.prototype.setValue = function(rowIndex, columnIndex, value){};

google.visualization.DataTable.prototype.sort = function(sortColumns){};

google.visualization.DataTable.prototype.toJSON = function(){};

/**
 * @constructor
 * @param responseObj
 */
google.visualization.QueryResponse = function(responseObj){};
google.visualization.QueryResponse.getVersionFromResponse = function(responseObj){};
google.visualization.QueryResponse.prototype.getVersion = function(){};
google.visualization.QueryResponse.prototype.getExecutionStatus = function(){};
google.visualization.QueryResponse.prototype.isError = function(){};
google.visualization.QueryResponse.prototype.hasWarning = function(){};
google.visualization.QueryResponse.prototype.containsReason = function(reason){};
google.visualization.QueryResponse.prototype.getDataSignature = function(){};
google.visualization.QueryResponse.prototype.getDataTable = function(){};
google.visualization.QueryResponse.prototype.getReasons = function(){};
google.visualization.QueryResponse.prototype.getMessage = function(){};
google.visualization.QueryResponse.prototype.getDetailedMessage = function(){};

/**
 * @constructor
 * @param dataSourceUrl
 */
google.visualization.Query = function(dataSourceUrl){};
google.visualization.Query.refreshAllQueries = function(){};
google.visualization.Query.setResponse = function(response){};
google.visualization.Query.prototype.setRefreshInterval = function(intervalSeconds){};
google.visualization.Query.prototype.send = function(responseHandler){};
google.visualization.Query.prototype.makeRequest = function(responseHandler, opt_params){};
google.visualization.Query.prototype.abort = function(){};
google.visualization.Query.prototype.setTimeout = function(timeoutSeconds){};
google.visualization.Query.prototype.setRefreshable = function(refreshable){};
google.visualization.Query.prototype.setQuery = function(queryString){};

google.visualization.errors = {};
google.visualization.errors.addError = function(container, message, opt_detailedMessage, opt_options){};
google.visualization.errors.removeAll = function(container){};
google.visualization.errors.addErrorFromQueryResponse = function(container, response){};
google.visualization.errors.removeError = function(id){};
google.visualization.errors.getContainer = function(errorId){};

google.visualization.events = {};
google.visualization.events.addListener = function(eventSource, eventName, eventHandler){};
google.visualization.events.trigger = function(eventSource, eventName, eventDetails){};
google.visualization.events.removeListener = function(listener){};

/**
 * @constructor
 * @param dataTable
 */
google.visualization.DataView = function(dataTable){};
google.visualization.DataView.prototype.setColumns = function(colIndices){};
google.visualization.DataView.prototype.setRows = function(arg0, opt_arg1){};
google.visualization.DataView.prototype.getViewColumns = function(){};
google.visualization.DataView.prototype.getViewRows = function(){};
google.visualization.DataView.prototype.hideColumns = function(colIndices){};
google.visualization.DataView.prototype.hideRows = function(arg0, opt_arg1){};
google.visualization.DataView.prototype.getViewColumnIndex = function(tableColumnIndex){};
google.visualization.DataView.prototype.getViewRowIndex = function(tableRowIndex){};
google.visualization.DataView.prototype.getTableColumnIndex = function(viewColumnIndex){};
google.visualization.DataView.prototype.getTableRowIndex = function(viewRowIndex){};
google.visualization.DataView.prototype.getNumberOfRows = function(){};
google.visualization.DataView.prototype.getNumberOfColumns = function(){};
google.visualization.DataView.prototype.getColumnId = function(columnIndex){};
google.visualization.DataView.prototype.getColumnIndex = function(columnId){};
google.visualization.DataView.prototype.getColumnLabel = function(columnIndex){};
google.visualization.DataView.prototype.getColumnPattern = function(columnIndex){};
google.visualization.DataView.prototype.getColumnType = function(columnIndex){};
google.visualization.DataView.prototype.getValue = function(rowIndex, columnIndex){};
google.visualization.DataView.prototype.getFormattedValue = function(rowIndex, columnIndex){};
google.visualization.DataView.prototype.getProperty = function(rowIndex, columnIndex, property){};
google.visualization.DataView.prototype.getColumnProperty = function(columnIndex, property){};
google.visualization.DataView.prototype.getColumnProperties = function(columnIndex){};
google.visualization.DataView.prototype.getTableProperty = function(property){};
google.visualization.DataView.prototype.getTableProperties = function(){};
google.visualization.DataView.prototype.getRowProperty = function(rowIndex, property){};
google.visualization.DataView.prototype.getRowProperties = function(rowIndex){};
google.visualization.DataView.prototype.getColumnRange = function(columnIndex){};
google.visualization.DataView.prototype.getDistinctValues = function(columnIndex){};
google.visualization.DataView.prototype.getSortedRows = function(sortColumns){};
google.visualization.DataView.prototype.getFilteredRows = function(columnFilters){};

google.visualization.formatters = {};
google.visualization.formatters.ArrowFormat = function(opt_options){};
google.visualization.formatters.ArrowFormat.prototype.format = function(dataTable, columnIndex){};
google.visualization.formatters.BarFormat = function(opt_options){};
google.visualization.formatters.BarFormat.prototype.format = function(dataTable, columnIndex){};
google.visualization.formatters.ColorFormat = function(){};
google.visualization.formatters.ColorFormat.prototype.addRange = function(from, to, color, bgcolor){};
google.visualization.formatters.ColorFormat.prototype.addGradientRange = function(from, to, color, fromBgColor, toBgColor){};
google.visualization.formatters.ColorFormat.prototype.format = function(dataTable, columnIndex){};
google.visualization.formatters.DateFormat = function(opt_options){};
google.visualization.formatters.DateFormat.prototype.format = function(dataTable, columnIndex){};
google.visualization.formatters.NumberFormat = function(opt_options){};
google.visualization.formatters.NumberFormat.prototype.format = function(dataTable, columnIndex){};
google.visualization.formatters.PatternFormat = function(pattern){};
google.visualization.formatters.PatternFormat.prototype.format = function(dataTable, srcColumnIndices, opt_dstColumnIndex){};

/**
 * @constructor
 */
google.visualization.GadgetHelper = function(){};
google.visualization.GadgetHelper.prototype.createQueryFromPrefs = function(prefs){};
google.visualization.GadgetHelper.prototype.validateResponse = function(response) {};

/**
 * @constructor
 * @param container
 */
google.visualization.AnnotatedTimeLine = function(container){};
google.visualization.AnnotatedTimeLine.prototype.draw = function(data, options){};
google.visualization.AnnotatedTimeLine.prototype.getSelection = function(){};
google.visualization.AnnotatedTimeLine.prototype.getVisibleChartRange = function(){};
google.visualization.AnnotatedTimeLine.prototype.setVisibleChartRange = function(firstDate, lastDate, opt_animate){};
google.visualization.AnnotatedTimeLine.prototype.showDataColumns = function(columnIndexes){};
google.visualization.AnnotatedTimeLine.prototype.hideDataColumns = function(columnIndexes){};

/**
 * @constructor
 * @param container
 */
google.visualization.AreaChart = function(container){};
google.visualization.AreaChart.prototype.draw = function(data, options){};

/**
 * @constructor
 * @param container
 */
google.visualization.BarChart = function(container){};
google.visualization.BarChart.prototype.draw = function(data, options){};

/**
 * @constructor
 * @param container
 */
google.visualization.ColumnChart = function(container){};
google.visualization.ColumnChart.prototype.draw = function(data, options){};

/**
 * @constructor
 * @param container
 */
google.visualization.Gauge = function(container){};
google.visualization.Gauge.prototype.draw = function(dataTable, opt_options){};

/**
 * @constructor
 * @param container
 */
google.visualization.GeoMap = function(container){};
google.visualization.GeoMap.clickOnRegion = function(id, zoomLevel, segmentBy, instanceIndex){};
google.visualization.GeoMap.prototype.setSelection = function(selection){};
google.visualization.GeoMap.prototype.getSelection = function(){};
google.visualization.GeoMap.prototype.draw = function(dataTable, options){};

/**
 * @constructor
 * @param container
 */
google.visualization.Map = function(container){};
google.visualization.Map.prototype.draw = function(dataTable, options){};
google.visualization.Map.prototype.setSelection = function(selection){};
google.visualization.Map.prototype.getSelection = function(){};

/**
 * @constructor
 * @param container
 */
google.visualization.ImageAreaChart = function(container){};
google.visualization.ImageAreaChart.prototype.draw = function(data, options){};

/**
 * @constructor
 * @param container
 */
google.visualization.ImageBarChart = function(container){};
google.visualization.ImageBarChart.prototype.draw = function(data, options){};

/**
 * @constructor
 * @param container
 */
google.visualization.ImageChart = function(container){};
google.visualization.ImageChart.prototype.draw = function(data, options){};

/**
 * @constructor
 * @param container
 */
google.visualization.ImageLineChart = function(container){};
google.visualization.ImageLineChart.prototype.draw = function(data, options){};

/**
 * @constructor
 * @param container
 */
google.visualization.ImagePieChart = function(container){};
google.visualization.ImagePieChart.prototype.draw = function(data, options){};

/**
 * @constructor
 * @param container
 * @param opt_domHelper
 */
google.visualization.ImageSparkLine = function(container, opt_domHelper){};
google.visualization.ImageSparkLine.prototype.getSelection = function(){};
google.visualization.ImageSparkLine.prototype.setSelection = function(selection){};
google.visualization.ImageSparkLine.prototype.draw = function(dataTable, options){};

/**
 * @constructor
 * @param container
 */
google.visualization.IntensityMap = function(container){};
google.visualization.IntensityMap.prototype.getSelection = function(){};
google.visualization.IntensityMap.prototype.setSelection = function(selection){};
google.visualization.IntensityMap.prototype.draw = function(dataTable, options){};

/**
 * @constructor
 * @param container
 */
google.visualization.LineChart = function(container){};
google.visualization.LineChart.prototype.draw = function(data, options){};

/**
 * @constructor
 * @param container
 */
google.visualization.MotionChart = function(container){};
google.visualization.MotionChart.prototype.draw = function(dataTable, options){};
google.visualization.MotionChart.prototype.getState = function(){};

/**
 * @constructor
 * @param container
 */
google.visualization.PieChart = function(container){};
google.visualization.PieChart.prototype.draw = function(data, options){};

/**
 * @constructor
 * @param container
 */
google.visualization.ScatterChart = function(container){};
google.visualization.ScatterChart.prototype.draw = function(data, options){};

/**
 * @constructor
 * @param container
 */
google.visualization.OrgChart = function(container){};
google.visualization.OrgChart.prototype.draw = function(dataTable, options){};
google.visualization.OrgChart.prototype.getSelection = function(){};
google.visualization.OrgChart.prototype.setSelection = function(selection){};
google.visualization.OrgChart.prototype.getCollapsedNodes = function(){};
google.visualization.OrgChart.prototype.getChildrenIndexes = function(rowInd){};
google.visualization.OrgChart.prototype.collapse = function(rowInd, collapse){};

/**
 * @constructor
 * @param container
 */
google.visualization.Table = function(container){};
google.visualization.Table.prototype.draw = function(dataTable, options){};
google.visualization.Table.prototype.getSortInfo = function(){};
google.visualization.Table.prototype.getSelection = function(){};
google.visualization.Table.prototype.setSelection = function(selection){};

google.visualization.drawToolbar = function(container, components){};

/**
 * @constructor
 * @param container
 */
google.visualization.Player = function(container){};
google.visualization.Player.prototype.draw = function(options){};
