var isShowMoreMessage = false;

function generateMessage() {
    var locale = document.getElementById('locale').value;
    var side = document.getElementById('side').value;
    var title = document.getElementById('title').value;
    var text = document.getElementById('text').value;
    var style = document.getElementById('style').value;

    var message = document.getElementById('message');
    message.innerHTML = `<div class="messageOnDesk bg-${style}" style="${locale}: 12px; ${side}: 12px;">
        <span class="closeMessageIcon" onclick="this.parentElement.style.display='none';">X</span>
        <h3 class="messageTitle">${title}</h3>
        <span class="messageText">${text}</span>
        <span class="showMoreMessage" id="showMoreMessage" onclick="showMoreMessage()">Mostrar mais</span>
        <div id="moreMessage" style="display: none;">
            <p class="showMoreText">Texto adicional</p>
        </div>
    </div>`;
}
function showMoreMessage() {
    if(isShowMoreMessage){
        document.getElementById('showMoreMessage').innerHTML = 'Mostrar mais';
        document.getElementById('moreMessage').style.display = 'none';
        isShowMoreMessage = false;
    }else{
        document.getElementById('showMoreMessage').innerHTML = 'Mostrar menos';
        document.getElementById('moreMessage').style.display = 'block';
        isShowMoreMessage = true;
    }
}