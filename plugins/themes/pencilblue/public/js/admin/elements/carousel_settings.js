$(document).ready(function()
{
    $('.media_item').draggable({revert: 'invalid', containment: 'document', helper: 'clone', cursor: 'move'});
    $('#active_media').droppable({accept: '.media_item', drop: function(event, ui)
    {
        $('#active_media').append(ui.draggable);
    }});
    $('#inactive_media').droppable({accept: '.media_item', drop: function(event, ui)
    {
        $('#inactive_media').append(ui.draggable);
    }});
    
    new jNarrow('#media_search', '#inactive_media .media_item',
    {
        searchChildElement: '.media_name',
        searchButton: '#media_search_button',
        searchText: '<i class="fa fa-search"></i>',
        clearText: '<i class="fa fa-times"></i>',
    });
});
