var ash = (function(){
    'use strict';

    var activeElement;
    var activeSelector;
    var getElement;
    var cellApply;
    var hideColumn;
    var showColumn;
    var toggleColumn;
    var showAllColumns;

    /**
     * Simple assignment helper
     * @param  {string} selector [target table]
     * @return {object}          [Returns self to implement possibility to build chains]
     */
    getElement = function(selector) {
        var element;

        element = document.querySelectorAll(selector);
        activeElement = element;
        activeSelector = selector;

        return this;
    };

    /**
     * Select thead and tbody cells
     * @param  {integer} number [number of column]
     * @return {array}        [array of DOM objects]
     */
    var getCells = function(number) {
        var td;
        var th;
        var selector;

        td = activeSelector + ' tr td:nth-child(' + number + ')';
        th = activeSelector + ' tr th:nth-child(' + number + ')';
        selector = th + ', ' + td;
        activeElement = document.querySelectorAll(selector);

        return activeElement;
    };

    /**
     * Applies display param to each cell
     * @param  {integer} sting [just 'display' param]
     * @param  {integer} number [number of column]
     */
    var cellApply = function (state, number) {
        var element;

        element = getCells(number);
        if (element.length !== 0) {
            for (var i = 0; i < element.length; i++) {
                var target = element[i];
                target.style.display = state; 
            }
        }
    };

    /**
     * Hide column
     * @param  {integer} number [number of column]
     * @return {object}        [Returns self to implement possibility to build chains]
     */
    hideColumn = function(number) {
        cellApply('none', number);

        return this;
    };

    /**
     * Show column
     * @param  {integer} number [number of column]
     * @return {object}        [Returns self to implement possibility to build chains]
     */
    showColumn = function(number) {
        cellApply('table-cell', number);

        return this;
    };

    /**
     * Toggle column
     * @param  {integer} number [number of column]
     * @return {object}        [Returns self to implement possibility to build chains]
     */
    toggleColumn = function(number) {
        var element;

        element = getCells(number);
        if (element.length !== 0) {
            for (var i = 0; i < element.length; i++) {
                var target = element[i];
                var state = target.style.display;
                var targetState = 'none';

                if (state == 'none') {
                    targetState = 'table-cell';
                }
                target.style.display = targetState; 
            }
        }

        return this;
    };

    /**
     * Show all columns
     * @return {object}        [Returns self to implement possibility to build chains]
     */
    showAllColumns = function() {
        var elements = document.querySelectorAll(activeSelector + ' td,' + activeSelector + ' th');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'table-cell';
        }

        return this;
    };

    return {
        get: getElement,
        hideColumn: hideColumn,
        showColumn: showColumn,
        toggleColumn: toggleColumn,
        showAllColumns: showAllColumns,
        getColumn: getCells,
    }
})();