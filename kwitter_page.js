const firebaseConfig = {
      apiKey: "AIzaSyDEmbFAQ0pAnRwKlfmYMT-pMS9a4gnezOQ",
      authDomain: "tweeter-cacff.firebaseapp.com",
      databaseURL: "https://tweeter-cacff-default-rtdb.firebaseio.com",
      projectId: "tweeter-cacff",
      storageBucket: "tweeter-cacff.appspot.com",
      messagingSenderId: "888631709516",
      appId: "1:888631709516:web:b870ef2b1cfed8a944c9e9"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name']
message=message_data['message']
like=message_data['like']
name_with_tag="<h4>"+name+"<img class='user_tick'src= 'tick.png'>";
message_with_tag=<h4 class='message_h4'> + message + </h4>;
like_button="button class='btn btn-warning'id="+fire b

//End code
      } });  }); }
getData();
function send()
{
      msg=document.getElementById("msg").Value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value ="";
}