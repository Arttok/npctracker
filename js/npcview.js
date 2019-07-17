$('#dndversion').change(function() {
    var val = parseInt($(this).children("option:selected").val());
    
    switch (val) {
        case 0:
            $('#npc_table_1').css('display', 'none');
            $('#npc_table_2').css('display', 'none');
            $('#npc_table_3').css('display', 'none');
            break;
        case 1:
            $('#npc_table_1').css('display', 'inline');
            $('#npc_table_2').css('display', 'none');
            $('#npc_table_3').css('display', 'none');
            break;
        case 2:
            $('#npc_table_1').css('display', 'none');
            $('#npc_table_2').css('display', 'inline');
            $('#npc_table_3').css('display', 'none');
            break;
        case 3:
            $('#npc_table_1').css('display', 'none');
            $('#npc_table_2').css('display', 'none');
            $('#npc_table_3').css('display', 'inline');
            break;
        case 4:
            $('#npc_table_1').css('display', 'inline');
            $('#npc_table_2').css('display', 'inline');
            $('#npc_table_3').css('display', 'inline');
            break;
    }
});