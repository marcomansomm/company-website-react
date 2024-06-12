import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <div className="container px-4 py-5" id="hanging-icons">
      <h2 className="pb-2 border-bottom">Services</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <ServiceCard
          icon="toggles2"
          title="Suporte ao Usuário"
          description="Pode ser feito localmente ou por um time remoto e terá como foco resolver problemas rapidamente."
        />
        <ServiceCard
          icon="cpu-fill"
          title="Outsourcing de equipamentos de TI"
          description="A empresa faz o aluguel temporário de um conjunto de equipamentos, como computadores, notebooks, tablets, celulares e até mesmo roteadores, para atender a demandas internas."
        />
        <ServiceCard
          icon="tools"
          title="Gestão de infraestrutura de TI"
          description="Uma equipe é contratada para gerenciar todo o parque tecnológico do negócio."
        />
      </div>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <ServiceCard
          icon="toggles2"
          title="Suporte ao Usuário"
          description="Pode ser feito localmente ou por um time remoto e terá como foco resolver problemas rapidamente."
        />
        <ServiceCard
          icon="cpu-fill"
          title="Outsourcing de equipamentos de TI"
          description="A empresa faz o aluguel temporário de um conjunto de equipamentos, como computadores, notebooks, tablets, celulares e até mesmo roteadores, para atender a demandas internas."
        />
        <ServiceCard
          icon="tools"
          title="Gestão de infraestrutura de TI"
          description="Uma equipe é contratada para gerenciar todo o parque tecnológico do negócio."
        />
      </div>
    </div>
  );
};

export default Services;
