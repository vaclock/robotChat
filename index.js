

var input = document.querySelector('.footer input[type="text"]');
var sendBtn = document.getElementById('send');
var content = document.getElementsByClassName('dialog-content')[0];
function bindEvent() {
    sendBtn.onclick = function (e) {
        if (input.value) {
            renderDom('myself', input.value);
        }
        ajax({
            method: 'post',
            // url: 'https://developer.duyiedu.com/edu/turing/chat',
            url:'https://api.hyfarsight.com/test/testRequest/robotChat',
            // data: {
            data: {
                txt:input.value
            },
            // },
            callback: function (rt) {
                renderDom('robot', rt.responseTxt);
                console.log(rt);
            },
            isAsynchronous: true
        })
        input.value = '';
    }
}

bindEvent();

input.onkeydown = function (e) {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
    // this.value = '';
}
/**
 * 根据参数渲染页面
 * @param {String} who 'myself' 'robot' 
 * @param {String} text 
 */
function renderDom(who, text) {
    // if()
    // <div class="myself clearfix">
    //     <img src="./240.png" alt="" class="avatar">
    //         <div class="text">小度你好哇!</div>
    //         </div>
    //     <div class="robot clearfix">
    //         <img src="./照片.jpg" alt="" class="avatar">
    //             <div class="text">你好呀？你好呀？你好呀？你好呀？你好呀？你好呀？你好呀？Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quae laboriosam reiciendis mollitia repudiandae minima aut id ipsam corporis suscipit ipsa rerum unde recusandae velit voluptatem non, officia qui debitis fugiat deleniti nemo corrupti eos magni. Fuga numquam, eaque illo enim nam nisi quas ea quam id voluptate repellendus ratione deserunt similique ipsam sunt provident tenetur magni, molestiae modi temporibus aspernatur nostrum maiores! Nisi iste maiores veniam eveniet ea id ullam ducimus temporibus qui, earum molestias consectetur doloribus natus similique quis placeat delectus nemo ratione reprehenderit expedita aperiam neque. Cumque magni voluptas, iusto totam possimus a fuga, reiciendis, repellendus maxime sit incidunt dolor dolorem esse. Cumque eos temporibus voluptas illum similique, nobis harum dolorum ad earum est consequuntur magni id minima nostrum sapiente eum blanditiis aut quibusdam odit suscipit tenetur ipsa. Consectetur asperiores in mollitia velit, porro itaque non ipsam quae accusamus, repellendus explicabo expedita dolores rem sed! At, vitae! Veniam nulla atque enim et ad eveniet, quisquam incidunt sequi dignissimos officiis molestiae perferendis ipsum, natus architecto minus iste exercitationem fuga repellendus facilis similique optio aut hic! Maiores accusantium, voluptates, eveniet doloribus quam laudantium vero illum, maxime quia ipsa officia debitis alias porro. A possimus expedita harum consequuntur ullam vitae dolores dolorem. Veniam iusto pariatur molestias, obcaecati magnam numquam tempore atque magni quae omnis aliquid in ipsa vitae quaerat, perspiciatis dicta nulla ducimus voluptas exercitationem nihil reiciendis voluptatibus velit. Qui, a nulla eaque aliquid cumque vero minus adipisci nam ullam beatae maxime nihil fuga placeat nisi ratione quis tempora error, ipsa molestiae voluptatibus dolore. Praesentium, explicabo alias id placeat in atque beatae excepturi labore laborum distinctio dignissimos, pariatur dolores. Porro eaque atque molestiae magnam. Deserunt eos non, molestiae eius autem doloremque, voluptas fugit aut beatae ipsa dolores officia quaerat corrupti odio possimus aliquid eligendi praesentium soluta at vero fugiat quae! Tempore, dolore ea, amet reiciendis minus cum omnis a recusandae vel nam porro rerum, eaque atque magnam nemo nulla commodi dicta voluptatum esse? Dolore sunt fuga adipisci tempore. Itaque enim eligendi pariatur minus, modi laboriosam sint praesentium. Impedit repellendus distinctio voluptatibus odio similique debitis necessitatibus tenetur doloribus ratione officiis, corporis consequatur saepe delectus dolore magnam voluptas quaerat, fuga quod quae esse voluptate nulla. Sit impedit neque fugit voluptas aliquam asperiores animi, ad maiores cum, iure rem amet eius. Voluptas rem velit consectetur at suscipit debitis cupiditate mollitia asperiores voluptates natus provident accusantium obcaecati quidem pariatur nemo est non alias corrupti doloremque eos blanditiis tempora, voluptatibus earum! Ea, iste, cum dolores optio fugit hic necessitatibus magnam reiciendis libero ullam aliquam. In cum dolores deleniti deserunt nostrum exercitationem laudantium tempore, iusto quaerat nulla quam repudiandae quod, laborum quidem iste itaque porro consequatur, dolore soluta quisquam suscipit modi rerum. Non minus incidunt quia officiis saepe mollitia quam reprehenderit minima fugit ad quidem modi, totam quisquam ab, maxime consequatur animi qui provident dignissimos, laboriosam nesciunt. Quasi quo tenetur inventore fugiat animi eius provident nisi! Sunt similique sint, inventore ad, odit eum velit, libero sapiente quas molestias a. Facere aut rem deserunt nemo magnam ratione recusandae impedit, sapiente nulla accusantium, ad quos voluptatem. Beatae in tenetur sed sequi reiciendis sit mollitia assumenda! Debitis velit quod soluta id perspiciatis vel obcaecati architecto culpa minus deleniti non, dolore rerum eaque aliquam exercitationem voluptate officiis voluptatibus, tempore, nobis necessitatibus minima. Alias nobis repellat quasi itaque dignissimos asperiores ratione est nulla consequuntur soluta animi, ipsa vel. Repellendus ducimus quod aliquam asperiores quibusdam alias, illum quia cupiditate quas dolore mollitia error dolorem delectus nemo! Minima ab iusto sapiente, corrupti ipsam doloribus architecto expedita dolore tenetur maxime accusantium praesentium. Vero voluptas nesciunt quaerat culpa illum optio, cupiditate mollitia enim doloremque soluta nostrum facilis, ullam illo odio unde, nemo deleniti voluptate laboriosam provident autem atque temporibus sunt ducimus! Cumque dignissimos suscipit et ipsum magni natus alias, error officiis eveniet laudantium dolores delectus quos ipsam. Laudantium, quaerat at. Sequi aliquid enim sit suscipit voluptatum magni laborum sapiente eos qui ducimus. Minima, numquam error repudiandae neque quae, assumenda, dolores consectetur reprehenderit architecto corporis sequi distinctio ipsum similique hic placeat reiciendis minus quia modi quisquam vero quasi praesentium suscipit est fuga. Temporibus porro itaque id nisi culpa? Quasi, iusto magni cupiditate, recusandae debitis, sint vero natus ex excepturi inventore sed. Vero aut, reprehenderit quod dicta eveniet esse veniam et, hic tenetur distinctio ipsum qui provident nisi a nesciunt voluptates suscipit officiis ut expedita labore illum est dolore numquam non. Quos totam odit nam fuga fugit quam necessitatibus iusto amet facere quas alias voluptatum, aut illum vitae aperiam ex incidunt ullam! Architecto quia nobis ad quaerat est eum soluta quibusdam quae? Eos tenetur velit ab expedita, debitis ut quia esse perspiciatis odit repellendus, ad dolorem, error laborum asperiores temporibus officiis! Architecto et itaque quasi, dolores nulla exercitationem in, pariatur at voluptatibus, aliquid minus dolor qui illum recusandae temporibus? Dolor facilis aut, distinctio deleniti, consectetur culpa dicta libero rem fuga non quam repellat consequuntur esse at eos nesciunt ad voluptate vitae architecto quidem asperiores. Accusantium officiis nesciunt at rerum alias doloremque distinctio in saepe modi iste, reiciendis praesentium debitis illo ratione, voluptatem, deleniti excepturi consequuntur asperiores numquam soluta. Ab saepe natus alias aperiam voluptatem earum nostrum architecto nisi quaerat. Repudiandae optio, consequatur cum porro exercitationem aliquam reiciendis beatae delectus non ab doloremque eligendi tempora voluptas iure placeat similique quam labore quia? Quaerat nostrum dolores corrupti, aliquam quae reiciendis dolorem a laborum consequatur laudantium! Ipsum nam facere illo deleniti eius assumenda facilis! Molestias alias, dolor natus perspiciatis officiis voluptates deleniti nemo a distinctio. Ut velit vel ab facilis nostrum accusantium neque tempore hic, quaerat sint repellendus temporibus, molestiae accusamus nam adipisci delectus ex. Repudiandae ipsam non amet porro explicabo obcaecati commodi officia iste, velit at provident quod numquam maiores, inventore temporibus atque assumenda facilis consequuntur excepturi. Maiores, quidem necessitatibus? Numquam, modi ut vero optio provident deleniti, repellendus officiis tempora aut eligendi voluptatum aspernatur possimus fuga cumque voluptate quod quasi, magnam hic. Sunt, aliquid. Alias mollitia possimus nihil velit ipsum unde officia? Officia mollitia repellendus asperiores corporis, expedita, veritatis minus fugit deleniti odit quos voluptatum quidem nemo, distinctio voluptate.</div>
    //         </div>
    var oDiv = document.createElement('div');
    oDiv.classList.add('clearfix');
    if (who === 'myself') {
        oDiv.classList.add('myself');
        oDiv.innerHTML = `<img src="./240.png" alt="" class="avatar">
                 <div class="text">${text}</div>
                 </div>`
    } else if (who === 'robot') {
        oDiv.classList.add('robot');
        oDiv.innerHTML = `<img src="./照片.jpg" alt="" class="avatar">
        <div class="text">${text}</div>`
    }
    content.appendChild(oDiv);
    // content.scrollTop = content.scrollHeight;
    content.scrollTo(0, content.scrollHeight);
}