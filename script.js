fetch(`https://swapi.dev/api/films/`)
    .then((res) => res.json())
    .then(films => {
        let titulos = [];
        let years = [];

        for (let i = 0; i < films.results.length; i++) {
            titulos.push(films.results[i].title);
            years.push(films.results[i].release_date.substr(0, 4));
        }
        //  HACER LO MISMO CON MAP
            /* const datos = films.results.map(peli => {
                return { title: peli.title, release: peli.release_date.substr(0,4), };
            })

            console.log(datos); */

        // LO MISMO CON FOREACH
            /* films.result.forEach(peli => {
                titulos.push(peli.title);
                years.push(peli.release_date);
            })   */

        console.log(titulos);
        console.log(years);

        var options = {
            fullWidth: false,
            chartPadding: {
                right: 150,
                bottom:100
            },
            width: '650px',
            height: '400px'
        };

        new Chartist.Line('.ct-chart', {
            labels: titulos,
            series: [years]
        }, options);

    });

 

 





