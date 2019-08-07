function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function ping(index) {
    document.getElementById('host-ping-status').innerHTML = 'awaiting...';
    document.getElementById('host-ping-status').style.color = '#d99f00';
    fetch(window.location.origin + '/api/viewraw/' + index + '/ping').then(function(response) {
        document.getElementById('host-ping-status').innerHTML = 'awaiting response...';
        document.getElementById('host-ping-status').style.color = '#d99f00';
        return response.json();
    }).then(function(pingStatus) {
        console.log(pingStatus);
        document.getElementById('host-ping-status').innerHTML = (pingStatus.status === 'online' ||
            pingStatus.status === 'offline') ? pingStatus.status : 'error';
        document.getElementById('host-ping-status').style.color = (pingStatus.status === 'online') ? 'green' : 'red';
    });
}