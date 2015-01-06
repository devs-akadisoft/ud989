(function(){
    var cats = [
        {"name":"Aisho", "clicks": 0, "image":"images/cat1.jpg"},
        {"name":"Kusho", "clicks": 0, "image":"images/cat2.jpg"},
        {"name":"Ajjoo", "clicks": 0, "image":"images/cat3.jpg"},
        {"name":"Mimmo", "clicks": 0, "image":"images/cat4.jpg"},
        {"name":"Bibbo", "clicks": 0, "image":"images/cat5.jpg"},
    ];

    var cat;

    var octopus = {
        init: function(){
            cat = cats[0];
            fullView.render();
        },
        showCat: function(ct){
            cat = ct;
            fullView.render();
        },
        increment:function(){
            cat.clicks++;
            fullView.render();
        }
    };
    
    var listView = {
        render: function(){
            var lv = $('.list-view');
            var cv = $('.cat-list');

            for(var i = 0; i < cats.length; i++){
                var c = cats[i];
                var li = document.createElement('li');
                var img = document.createElement('img');
                img.src = c.image;
                (function(copyCat){
                    img.onclick = function(){octopus.showCat(copyCat);}
                })(c);
                li.appendChild(img);
                cv.append(li);
            }
        }
    
    };

    var fullView = {
        render: function(){
            var fv = $(".full-view");
            var img = document.createElement('img');
            var counter = document.createElement('span');

            img.src = cat.image;
            img.onclick = function(){octopus.increment()};
            counter.textContent = cat.clicks;

            fv.html("<span>Name: " + cat.name  + "</span><br/>");
            fv.append(img);
            fv.append("<br/> Clicked: ");
            fv.append(counter);

        } 
    };

    octopus.init();
    listView.render();
})();
