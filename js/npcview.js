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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the image of the NPC you clicked on.
var img = $('.myImg');
var modalImg = $("#img01");
$('.myImg').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}