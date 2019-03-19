var nivelOne = [

    {
        title: "Quando o operado (+) não é usado para fazer uma soma, o mesmo pode servir para: ",

        options: [
            {
                letterOpition: 'A',
                titleOpitons: 'multiplicar',
                probability: 0.2

            },
            {
                letterOpition: 'B',
                titleOpitons: 'somar',
                probability: 0.2
            },
            {
                letterOpition: 'C',
                titleOpitons: 'concatenar',
                responseOptions: true,
                probability: 0.5
            },
            {
                letterOpition: 'D',
                titleOpitons: 'nda',
                probability: 0.1
            }


        ],
        statusQuestion: true,
    



    },
    {
        title: "Qual operado é usando para igualdade de tipos?",

        options: [
            {
                letterOpition: 'A',
                titleOpitons: '===',
                responseOptions: true,
                probability: 0.5
            },
            {
                letterOpition: 'B',
                titleOpitons: '=',
                probability: 0.2
            },
            {
                letterOpition: 'C',
                titleOpitons: '!=',
                probability: 0.2
            },
            {
                letterOpition: 'D',
                titleOpitons: '<=',
                probability: 0.1
            }
        ],

        statusQuestion: true,
    


    },
    {
        title: "Dado a instrução (typeoff 'teste'),  qual é o returno?",

        options: [
            {
                letterOpition: 'A',
                titleOpitons: 'number',
                probability: 0.5
            },
            {
                letterOpition: 'B',
                titleOpitons: 'text',
                probability: 0.2
            },
            {
                letterOpition: 'C',
                titleOpitons: 'nda',
                probability: 0.2
            },
            {
                letterOpition: 'D',
                titleOpitons: 'string',
                responseOptions: true,
                probability: 0.1
            }
        ],

        statusQuestion: true,
    },
    {
        title: "Dado a instrução (0 == false && 0 !==false), qual é o returno?",

        options: [
            {
                letterOpition: 'A',
                titleOpitons: '0',
                probability: 0.5
            },
            {
                letterOpition: 'B',
                titleOpitons: 'false',
                probability: 0.2
            },
            {
                letterOpition: 'C',
                titleOpitons: 'undefined',
                probability: 0.2
            },
            {
                letterOpition: 'D',
                titleOpitons: 'true',
                responseOptions: true,
                probability: 0.1
            }
        ],

        statusQuestion: true,
    }
]

var nivelTwo= [ {

        title: "Após executarmos a instrução var scores = [1, 10, 2, 21].sort() no console do browser, o que será retornado?",

        options: [
            {
                letterOpition: 'A',
                titleOpitons: '[10, 1, 2, 21]',
                probability: 0.1
            },
            {
                letterOpition: 'B',
                titleOpitons: '[1, 2, 10, 21]',
                probability: 0.2
            },
            {
                letterOpition: 'C',
                titleOpitons: '[10, 2,1, 21]',
                probability: 0.2
            },
            {
                letterOpition: 'D',
                titleOpitons: '[1, 10, 2, 21]',
                responseOptions: true,
                probability: 1
            }
        ],

        statusQuestion: true,
    

    },
    {
        title: "Após utilizarmos a function shift() no array [1, 2, 3], qual será o resultado ?",

        options: [
            {
                letterOpition: 'A',
                titleOpitons: '[1, 2, 3]',
               
                probability: 0.5
            },
            {
                letterOpition: 'B',
                titleOpitons: '[1, 2]',
                probability: 0.2
            },
            {
                letterOpition: 'C',
                titleOpitons: '[1, 3]',
                probability: 0.2
            },
            {
                letterOpition: 'D',
                titleOpitons: '[ 2, 3]',
                responseOptions: true,
                probability: 0.9
            }
        ],

        statusQuestion: true,
     

    },
    {
        title: "Para retonar a posição 1 e 2 do array de tamanho 5 seguinte, quais parametros você deve passar no slice() ?",

        options: [
            {
                letterOpition: 'A',
                titleOpitons: 'slice(1, 2)',
                probability: 0.1
            },
            {
                letterOpition: 'B',
                titleOpitons: 'slice(1, 3)',
                responseOptions: true,
                probability: 0.8
            },
            {
                letterOpition: 'C',
                titleOpitons: 'slice(0, 3)',
                probability: 0.1
            },
            {
                letterOpition: 'D',
                titleOpitons: 'slice(1, 2)',
                probability: 0.1
            }
        ],

        statusQuestion: true,
     

    },
    {
        title: " Qual dessas funções acrescenta um ou mais elementos na primeira posição do array ?",

        options: [
            {
                letterOpition: 'A',
                titleOpitons: 'shift()',
                probability: 0.1
            },
            {
                letterOpition: 'B',
                titleOpitons: 'sort()',
                probability: 0.2
            },
            {
                letterOpition: 'C',
                titleOpitons:'unshift()',
                responseOptions: true,
                probability: 0.74
            },
            {
                letterOpition: 'D',
                titleOpitons: 'Esposa2',
                probability: 0.1
            }
        ],

        statusQuestion: true,
     

    }

]


var nivelThree = [

    {
        title: "Dado a instrução var scores = [1, 10, 2, 21].sort(function(a,b)=>{return a > b}), qual será o retorno?",

        options: [
            {
                letterOpition: 'A',
                titleOpitons: '[2, 10, 1, 21]',
                probability: 0.32
            },
            {
                letterOpition: 'B',
                titleOpitons: '[1, 21, 2, 10]',
                probability: 0.2
            },
            {
                letterOpition: 'C',
                titleOpitons: '[1, 2, 10, 21]',
                responseOptions: true,
                probability: 0.75
            },
            {
                letterOpition: 'D',
                titleOpitons: '[1, 10, 2, 21]',
                probability: 0.1
            }
        ],

        statusQuestion: true,
    

    },
    {
        title: " Ao executar a instrução var scores = [1,'2','100', 10, 5, 21].sort((a,b)=>{return a - b}), qual será a onder do array na variável score ?",

        options: [
            {
                letterOpition: 'A',
                titleOpitons: '[1, "2", 5, 10, 21, "100"]',
                responseOptions: true,
                probability: 0.96
            },
            {
                letterOpition: 'B',
                titleOpitons: '[1, "100", 2, 10, 21, "100"]',
                probability: 0.2
            },
            {
                letterOpition: 'C',
                titleOpitons: '[1, 5, "2", 10, 21, "100"]',
                probability: 0.2
            },
            {
                letterOpition: 'D',
                titleOpitons: '[1, 10, "100", "2", 5]',
                probability: 0.1
            }
        ],

        statusQuestion: true,
     

    },

    {
        title: "const a = 10 e var b = 10; a = (b*a)/100. Qual é o resultando desta conta ?",

        options: [
            {
                letterOpition: 'A',
                titleOpitons: '2.65',
                probability: 0.96
            },
            {
                letterOpition: 'B',
                titleOpitons: '1',
                probability: 0.2
            },
            {
                letterOpition: 'C',
                titleOpitons: '0',
                probability: 0.2
            },
            {
                letterOpition: 'D',
                titleOpitons: 'nda',
                responseOptions: true,
                probability: 0.1
            }
        ],

        statusQuestion: true,
     

    }




]






