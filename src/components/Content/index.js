import React from 'react';
import { Redirect } from 'react-router-dom';

const Content = () => {

    return (
        <div className='row' style={{width:'100%'}}>
            <div className='col-md-3 text-justify'>
                <p className='text-muted'>
                    <p>
                        <small>
                            Meu nome é Salumão, sou bacharel em Sistemas de Informação desde 2013, em 2016 concluí uma especialização em Engenharia de Software. 
                            No momento, estou estudando as seguintes tecnologias: ReactJS, React Native, NodeJS, PHP, Python e MongoDB.
                        </small>
                    </p>
                    <p>
                        <small>
                            Em 2013 comecei a trabalhar para o governo do estado do Tocantins, lotado na Secretaria da saúde, 
                            2016 passei em um concurso público federal para trabalhar na Ebserh. Setembro de 2019 passei em outro
                            concurso publico e desde então trabalho na Universidade Federal do Tocantins.
                        </small>
                    </p>
                </p>
            </div>
            <div className='col-md-9'>
                <p>Right side</p>
            </div>
        </div>
    );
}

export default Content;