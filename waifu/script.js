console.log('Hello World !');
let request = new XMLHttpRequest();

        // request.open('GET',`https://nekos.best/api/v2/nom?amount=5`);
        let flag = true;
        let html = '';

        function fun(category,num){

            request.open('GET',`https://nekos.best/api/v2/${category}?amount=${num}`);
            request.send();

                request.addEventListener('load',function(){
                    data = JSON.parse(this.responseText);

                    if(flag)
                    {
                        for(let i=0;i<num;i++)
                        {
                            let temp1 = data.results[i].url;
                            let temp2 = data.results[i].anime_name;
                            console.log(data.results[i].anime_name);
                            html = `
                                <div class="card">
                                <div >
                                        <img class="img" alt="Image Here" src='${temp1}'>
                                </div>
                                <div class="Name"> ${temp2}</div>
                            </div>
                            `;
                            console.log(data);
                            flag = false;
                            document.querySelector('.content').insertAdjacentHTML('beforeend',html);

                        }
                    }


                });
            
                
        }
                
                document.querySelector('button').addEventListener('click',()=>{
                    let cat = document.querySelector('.cate')?.value;
                    let num = document.querySelector('.number')?.value;
                    flag = true;
                    fun(cat,num);
                })