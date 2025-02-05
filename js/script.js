
var listaHTML = document.getElementById("lista")

  var listaDeRemedios = [
    {
      nome: "Actilyse",
      imagem: "img/Actilyse.png",
      indicacoesLista: ["AVCI", "Embolia Pulmonar", "Infarto Agudo do Miocárdio"],
      diluicao: "A diluição deve ser feita com solução de cloreto de sódio a 0,9% para injeção.",
      vias: "Intravenosa (IV)",
      incompatibilidade: "Incompatível com soluções que contenham outros medicamentos, exceto a solução de cloreto de sódio a 0,9% para injeção.",
      reacoes: "As reações adversas mais comuns incluem:  -Hemorragia  -Dor de cabeça  -Náusea  -Vômito  -Reações alérgicas"
    },
    
    {
      nome: "Alteplase",
      imagem: "img/Alteplase.png",
      indicacoesLista: ["AVCI", "Embolia Pulmonar", "Infarto Agudo do Miocárdio"],
      diluicao: "A diluição deve ser feita com solução de cloreto de sódio a 0,9% para injeção.",
      vias: "Intravenosa (IV)",
      incompatibilidade: "Incompatível com soluções que contenham outros medicamentos, exceto a solução de cloreto de sódio a 0,9% para injeção.",
      reacoes: "As reações adversas mais comuns incluem:   -Hemorragia  -Dor de cabeça  -Náusea  -Vômito  -Reações alérgicas"
    },
    
    
    {
      nome: "Aminofilina",
      imagem: "img/Aminofilina.jpg",
      indicacoesLista: ["Asma", "DPOC", "Bronquite crônica"],
      diluicao: "A aminofilina pode ser administrada por via intravenosa, geralmente diluindo-se em solução salina ou dextrose.",
      vias: "Intravenosa (IV), Oral (comprimidos ou soluções)",
      incompatibilidade: "Evitar misturar com soluções ácidas ou certas soluções intravenosas.",
      reacoes: "As reações adversas mais comuns incluem:- Náuseas- Dor de cabeça- Palpitações- Insônia- Tremores- Hipotensão ou hipertensão- Reações alérgicas, embora raras."
    },
    
    {
      nome: "Benzilpenicilina Benzatina",
      imagem: "img/BenzilpenicilinaBenzatina.jpeg",
      indicacoesLista: ["Infecções estreptocócicas", "Sífilis", "Profilaxia de febre reumática", "Coreia"],
      diluicao: "Diluir o pó com 5 mL de água para injeção.",
      vias: "Intramuscular (IM)",
      incompatibilidade: "Alergia a penicilinas ou cefalosporinas.",
      reacoes: "Erupções cutâneas, urticária."
    },
    
    {
      nome: "Bicarbonato de Sódio",
      imagem: "img/BicarbonatoDeSódio.png",
      indicacoesLista: ["Acidose metabólica", "Desequilíbrio ácido-base", "Ressuscitação cardiorrespiratória"],
      diluicao: "Solução injetável 8,4%.",
      vias: "Intravenosa (IV)",
      incompatibilidade: "Não combinar com anfetaminas, salicilatos, metotrexato, entre outros.",
      reacoes: "Hipernatremia, alcalose metabólica, irritabilidade, celulite química no local da injeção."
    },
    
    {
      nome: "Bromoprida",
      imagem: "img/Bromoprida.png",
      indicacoesLista: ["Náusea e vômito", "Gastroparesia diabética", "Dispepsia funcional", "Náusea e vômito pós-operatórios"],
      diluicao: "Diluir em solução salina 0,9% ou dextrose 5%.",
      vias: "Intravenosa (IV), Intramuscular (IM), Oral",
      incompatibilidade: "Não misturar com aminoglicosídeos, tetraciclinas, amfotericina B.",
      reacoes: "Reações alérgicas, dor de cabeça, tontura, sonolência, náusea, alterações cardíacas, reações extrapiramidais."
    },
    
    {
      nome: "Buscopam Composto", 
      imagem: "img/Buscopam Composto.png",
      indicacoesLista: [
        "Cólicas intestinais e gastrointestinais, como as causadas por gases, prisão de ventre ou distúrbios digestivos",
        "Cólicas menstruais",
        "Dores abdominais agudas de origem visceral",
        "Distúrbios gastrointestinais que causam espasmos e dor, como no caso de síndrome do intestino irritável"
      ],
      diluicao: "A diluição de medicamentos como escopolamina, dipirona e Buscopan depende da concentração e da via de administração. Em geral, para uso intravenoso ou intramuscular, a escopolamina (0,4 mg/mL) pode ser diluída em 5-10 mL de soro fisiológico ou glicosado. A dipirona (500 mg/mL ou 1 g/5 mL) pode ser administrada sem diluição ou diluída em 5-10 mL de solução salina. Já o Buscopan (20 mg/mL) é normalmente administrado sem diluição ou diluído em 5 mL de soro fisiológico. Contudo, sempre siga as orientações do profissional de saúde, pois as recomendações podem variar conforme o caso clínico.",
      vias: "As vias de administração de escopolamina, dipirona e Buscopan podem variar conforme a indicação clínica, mas geralmente são administrados da seguinte maneira:· Escopolamina: Pode ser administrada via intravenosa (IV), intramuscular (IM) ou subcutânea (SC).· Dipirona: Comumente administrada via intravenosa (IV) e intramuscular (IM). Também disponível em forma oral (comprimidos ou gotas).· Buscopan: Administrado via intravenosa (IV), intramuscular (IM) ou oral (comprimidos). A escolha da via depende da necessidade clínica e das orientações médicas.",
      reacoes: "· Escopolamina: Pode causar boca seca, visão turva, retenção urinária, constipação, sonolência e confusão mental (em idosos).· Dipirona: Pode causar hipotensão, reações alérgicas (como erupções cutâneas), agravamento de reações hematológicas (raro), e distúrbios gastrointestinais.· Buscopan: Pode provocar boca seca, visão turva, retenção urinária, constipação, taquicardia e tontura. Em combinação:· Os efeitos colaterais anticolinérgicos (como boca seca e retenção urinária) podem ser potencializados.· A hipotensão também pode ser mais pronunciada devido ao uso conjunto dos medicamentos. Sempre consulte um médico antes de combinar esses medicamentos para evitar reações adversas.",
      incompatibilidade: "Não há incompatibilidade química conhecida entre escopolamina, dipirona e Buscopan, mas a mistura e administração conjunta devem ser feitas com cuidado. Sempre consulte um profissional de saúde para confirmar as doses e a combinação de medicamentos, garantindo a segurança do tratamento.· Escopolamina . Dipirona: Geralmente compatíveis, mas deve-se verificar sempre com o farmacêutico.· Escopolamina . Buscopan: Ambos são anticolinérgicos, podendo aumentar efeitos colaterais como boca seca e retenção urinária.· Dipirona . Buscopan: Não há incompatibilidade direta, mas a combinação pode aumentar o risco de efeitos como hipotensão."
    },
    
    {
      nome: "Buscopam Simples", 
      imagem: "img/BuscopamSimples.jpeg",
      indicacoesLista: [
        "Cólicas menstruais",
        "Dores abdominais",
        "Cólicas renais",
        "Cólicas biliares"
      ],
      diluicao: "Diluir em solução de cloreto de sódio 0.9% ou glicose 5%",
      vias: "Intravenosa (IV) e Intramuscular (IM)",
      incompatibilidade: "Soluções alcalinas, sulfatos, Medicamentos com efeitos antialérgicos, medicamentos para doenças cardiovasculares, Medicamentos do sistema nervoso",
      reacoes: "Boca seca, sonolência, constipação, urticária"
    },
    
    {
      nome: "Cefalotina Sódica", 
      imagem: "img/Cefalotina.png",
      indicacoesLista: [
        "Infecções bacterianas graves (ex: septicemia, meningite)",
        "Infecções respiratórias (ex: pneumonia, bronquite)",
        "Infecções urinárias (ex: pielonefrite, cistite)",
        "Infecções de pele e tecidos moles (ex: celulite, abscesso)",
        "Profilaxia cirúrgica"
      ],
      diluicao: "- Diluir em solução de cloreto de sódio a 0,9% ou dextrose a 5%. - Concentração máxima: 100 mg/mL. - Estabilidade: 24 horas a temperatura ambiente.",
      vias: "- Intravenosa (IV). - Intramuscular (IM).",
      incompatibilidade: "- Aminoglicosídeos (ex: gentamicina, tobramicina). - Tetraciclinas. - Amfotericina B. - Soluções ácidas ou alcalinas",
      reacoes: "- Reações alérgicas (ex: erupção cutânea, urticária). - Faringite. - Diarreia. - Dor abdominal. - Nefrotoxicidade (rara). - Reações hemolíticas (rara)."
    },
    
    {
      nome: "Cefepima", 
      imagem: "img/Cefepima.png",
      indicacoesLista: [
        "O medicamento é indicado para o tratamento, em adultos, das infecções do trato respiratório inferior, incluindo pneumonia e bronquite",
        "Infecções complicadas do trato urinário, incluindo pielonefrite e infecções não complicadas do trato urinário",
        "Infecções da pele e estruturas cutâneas",
        "Infecções intra-abdominais, incluindo peritonite e infecções do trato biliar",
        "Infecções ginecológicas",
        "Septicemia",
        "Terapia empírica em pacientes submetidos à cirurgia de cólon reto"
      ],
      diluicao: "Para administração intramuscular (IM): diluente água estéril para injeção, solução injetável de cloreto de sódio a 0,9% ou solução injetável de glicose a 5%. Para administração endovenosa (EV): diluente cloreto de sódio a 0,9%, solução injetável de glicose a 5%, solução injetável de cloreto de sódio + glicose a 5% e solução injetável de Ringer com lactato.",
      vias: "Via endovenosa (EV), Via intramuscular (IM)",
      incompatibilidade: "A solução de cloridrato de cefepima, assim como a maioria dos antibióticos beta-lactâmicos, não deve ser associada com solução de metronidazol, vancomicina, gentamicina, sulfato de tobramicina ou sulfato de netilmicina devido à incompatibilidade física e química. Entretanto, caso a terapia concomitante com cloridrato de cefepima seja indicada, cada um desses antibióticos poderá ser administrado separadamente.",
      reacoes: "Graves: Este medicamento pode causar Síndrome de Stevens-Johnson, eritema multiforme, necrólise epidérmica tóxica e nefropatia tóxica. Além desses, também são relatados anemia aplásica, anemia hemolítica, hemorragia e teste falso-positivo para glicose na urina. Comum: Este medicamento pode causar reações no local da aplicação intravenosa, como flebite, e dor ou inflamação no local da aplicação em casos de administração intramuscular. Além desses, também são relatados sintomas gastrointestinais e reações de hipersensibilidade."
    },
    
    {
      nome: "Ceftriaxona", 
      imagem: "img/Ceftriaxona.png",
      indicacoesLista: [
        "Infecções do trato respiratório",
        "Infecções da pele e tecidos moles",
        "Infecções do trato geniturinário",
        "Septicemia",
        "Infecções gastrointestinais",
        "Meningite",
        "Infecções ósseas e articulares",
        "Profilaxia cirúrgica"
      ],
      diluicao: "Para administração intramuscular: diluir em água para injeção, na proporção de 5,6. Para administração intravenosa: diluir em soro fisiológico 0,9%, na proporção de 3,4.",
      vias: "Via intramuscular, Via intravenosa, Infusão contínua",
      incompatibilidade: "Não se recomenda a mistura de cefalotina com outras medicações. A mistura de antibacterianos beta-lactâmicos (penicilinas e cefalosporinas) e aminoglicosídeos pode resultar em inativação de ambas as substâncias. Se clinicamente necessário, elas devem ser administradas separadamente (não misturá-las no mesmo frasco ou na mesma bolsa intravenosa). Se estiver utilizando a técnica Y, suspender temporariamente a administração de uma substância enquanto se administra a outra.",
      reacoes: "Raras: Erupções cutâneas, anafilaxia, alergia. Comum: Endurecimento do tecido, dor. Muito rara: Hematológicas, hepáticas, renais."
    },
    
    {
      nome: "Cloreto de sódio", 
      imagem: "img/Cloreto de sódio.png",
      indicacoesLista: [
        "Reposição hidroeletrolítica",
        "Tratamento de hipovolemia",
        "Reposição de sódio em casos de hiponatremia",
        "Veículo para diluição de medicamentos",
        "Manutenção do equilíbrio ácido-básico",
        "Irrigação de feridas e cavidades corporais"
      ],
      diluicao: "Concentrações mais comuns: 0,9% (solução isotônica): Equivalente a 9 g/L de NaCl. 0,45% (solução hipotônica). 3% ou mais (soluções hipertônicas, utilizadas em casos específicos). Uso: Pode ser usado puro ou como diluente para medicamentos intravenosos.",
      vias: "Intravenosa (IV): Uso mais comum. Subcutânea: Para hidratação (hipodermóclise). Irrigação: Para limpeza de feridas, cavidades corporais e vias respiratórias. Oral: Em casos leves de reposição eletrolítica. Inalação: Nebulização para hidratação das vias aéreas.",
      incompatibilidade: "Químicas e físicas: Pode ser incompatível com medicamentos que causam precipitação ou degradação, como alguns antibióticos, fosfato de sódio e carbonato de sódio. Sempre verificar a bula do medicamento a ser diluído. Soluções incompatíveis: Não misturar com soluções contendo cálcio (ex.: Ringer lactato) devido ao risco de precipitação de cristais de cálcio.",
      reacoes: "Uso excessivo ou inadequado pode causar: Hipernatremia: Sede intensa, confusão mental, edema. Sobrecarga de volume: Edema periférico, insuficiência cardíaca congestiva. Acidose metabólica: Com o uso de soluções hipertônicas. Irritação local no local da infusão."
    },
    
    {
      nome: "Cloridato de Dopamina", 
      imagem: "img/Cloridato de Dopamina.png",
      indicacoesLista: [
        "Hipotensão",
        "Choque (cardiogênico, séptico, anafilático, hipovolêmico)",
        "Retenção hidrossalina de etiologia variada"
      ],
      diluicao: "A Dopamina contém 50mg de substância ativa em 10mL; portanto, adicionando-se 1 ampola em 250mL de soro fisiológico ou soro glicosado, obtém-se uma solução onde 1mL (20 gotas) contém 200mcg de substância ativa",
      vias: "O cloridrato de dopamina deve ser administrado exclusivamente através de infusão endovenosa com a solução diluída antes da administração. Deve ser utilizada uma veia de grande calibre, preferencialmente o braço, evitando-se extravasamento para que não ocorra uma necrose tissular.",
      incompatibilidade: "O cloridrato de dopamina apresenta incompatibilidade com furosemida, tiopental sódico, insulina, ampicilina e anfotericina B; misturas com sulfato de gentamicina, cefalotina sódica ou oxacilina sódica devem ser evitadas.",
      reacoes: "As reações adversas ao medicamento incluem problemas cardiológicos, respiratórios, gastrointestinais, endócrinos, neurológicos (como cefaleia e ansiedade), dermatológicos (como necrose no local de aplicação), oftálmicos (infarto da retina) e psiquiátricos (delírios e alucinações). Também podem ocorrer disúria e nefrotoxicidade, além de hipertensão em caso de superdose. A dopamina deve ser usada com cautela em pacientes com inibidores da MAO ou condições vasculares, devido ao risco de isquemia. Sua meia-vida curta permite controle dos efeitos ao suspender o medicamento."
    },
    
    {
      nome: "Clorpromazina", 
      imagem: "img/Clorpromazina.png",
      indicacoesLista: [
        "Efeitos Extrapiramidais: Tremores, rigidez muscular, acatisia e distonia.",
        "Sedação: Sonolência é comum, especialmente no início do tratamento.",
        "Hipotensão Ortostática: Queda da pressão arterial ao levantar-se.",
        "Efeitos Anticolinérgicos: Boca seca, constipação, retenção urinária e visão turva.",
        "Reações Alérgicas: Rash cutâneo, urticária e, raramente, reações anafiláticas.",
        "Discinesia Tardia: Movimentos involuntários tardios, especialmente com uso prolongado.",
        "Síndrome Neuroléptica Maligna: Condição rara, porém grave, caracterizada por hipertermia, rigidez muscular e instabilidade autonômica."
      ],
      diluicao: "Solução Injetável: A clorpromazina injetável geralmente está disponível em concentrações de 5 mg/mL. Para administração intravenosa, recomenda-se diluir a dose prescrita em 10 a 20 mL de solução fisiológica (cloreto de sódio 0,9%) e administrar lentamente para evitar hipotensão. Para infusão intravenosa contínua, pode-se diluir em volumes maiores, conforme orientação médica.",
      vias: "Oral: Comprimidos ou solução oral, utilizados para tratamento ambulatorial. Intramuscular (IM): Utilizada em situações que requerem início de ação mais rápido ou quando a via oral não é viável. Intravenosa (IV): Indicada em emergências médicas, como agitação psicomotora intensa ou náuseas e vômitos intratáveis.",
      incompatibilidade: "Interações Medicamentosas: A clorpromazina pode interagir com diversos medicamentos, potencializando ou diminuindo seus efeitos. É importante evitar a combinação com: Levodopa: A clorpromazina pode antagonizar os efeitos da levodopa, utilizada no tratamento da doença de Parkinson. Álcool: O uso concomitante pode aumentar os efeitos depressores no sistema nervoso central. Lítio e Sultoprida: A combinação pode aumentar o risco de efeitos adversos extrapiramidais. Incompatibilidades Físico-Químicas: A clorpromazina pode ser incompatível com soluções alcalinas e alguns compostos oxidantes. Recomenda-se não misturar com outros medicamentos na mesma seringa ou solução intravenosa sem confirmação de compatibilidade.",
      reacoes: "Transtornos Psicóticos: Esquizofrenia e outras psicoses. Estados de Agitação e Ansiedade: Quando outras medidas terapêuticas não foram eficazes. Náuseas e Vômitos: Particularmente em casos refratários. Soluços Incoercíveis: Soluços persistentes que não respondem a tratamentos convencionais. Tétano: Como adjuvante no controle de espasmos musculares."
    },

    {
      nome: "Dexametasona", 
      imagem: "img/Dexametasona.jpg",
      indicacoesLista: [
        "Tratamento de condições nas quais os efeitos anti-inflamatórios e imunossupressores dos corticosteroides são desejados.",
        "Tratamento intensivo durante períodos mais curtos."
      ],
      diluicao: "Considere diluição adicional e administração mais lenta por IVPB para evitar irritação. Diluentes compatíveis: soro fisiológico 0,9% ou soro glicosado 5%",
      vias: "Pode ser administrado pela via intravenosa, intramuscular, intra-articular ou intrabursal.",
      incompatibilidade: "Não pode ser usado por pessoas alérgicas ao princípio ativo ou a qualquer outro medicamento da mesma classe, bem como a algum componente de sua fórmula.",
      reacoes: "Distúrbios líquidos e eletrolíticos: retenção de sódio, retenção de líquido, insuficiência cardíaca congestiva em pacientes suscetíveis, perda de potássio, alcalose hipocalêmica, hipertensão e síndrome de lise tumoral."
    },
    
    {
      nome: "Diclofenaco", 
      imagem: "img/Diclofenaco.jpg",
      indicacoesLista: [
        "Controle da dor e inflamação com o uso de AINEs, analgésicos e corticosteróides.",
        "Tratamento da causa subjacente da dor e inflamação."
      ],
      diluicao: "A diluição do diclofenaco para administração intramuscular deve ser feita com água estéril para injeção ou solução de cloreto de sódio a 0,9%. Para a via intravenosa, utiliza-se soro fisiológico a 0,9% ou solução de glicose a 5%, conforme a orientação do fabricante.",
      vias: "Via oral, via intramuscular.",
      incompatibilidade: "O diclofenaco pode interagir com metotrexato (aumentando a toxicidade), lítio (potencializando a toxicidade), anticoagulantes (aumentando o risco de sangramentos), diuréticos e inibidores da ECA (prejudicando a função renal), ciclosporina (aumentando danos renais) e outros AINEs (aumentando os riscos gastrointestinais).",
      reacoes: "Cefaleia, tontura, visão borrada, vertigem, epigastralgia, náuseas, vômitos, diarreia, dispepsia, cólicas abdominais, flatulência, diminuição do apetite, irritação local, elevação das transaminases."
    },
    
    {
      nome: "Dimenidrinato cloridrato de piridoxina", 
      imagem: "img/Dimenidrinato cloridrato de piridoxina.png",
      indicacoesLista: [
        "Profilaxia e tratamento de náuseas e vômitos.",
        "Controle de vertigens em geral."
      ],
      diluicao: "Soro fisiológico 9% ou glicose a 5%.",
      vias: "Oral",
      incompatibilidade: "Drogas ototóxicas",
      reacoes: "Sedação, sonolência e cefaleia."
    },
    
    {
      nome: "Dipirona", 
      imagem: "img/Dipirona.png",
      indicacoesLista: [
        "Tratamento de febre.",
        "Alívio da dor de cabeça, dor muscular e cólicas.",
        "Medicamento isento de prescrição para o controle de dores e febre."
      ],
      diluicao: "Para solução injetável diluir cada ampola com 20mL de SF ou SG. Concentração máxima: 50 mg/mL. Via oral.",
      vias: "Via intravenosa, intramuscular, via retal (anal), via oral.",
      incompatibilidade: "Bupropiona, efavirenz, metadona, ciclosporina, tacrolimus ou sertralina podem reduzir as concentrações plasmáticas desses medicamentos.",
      reacoes: "Náusea ou vômito, febre, sensação de cansaço, perda de apetite, urina de cor escura, fezes de cor clara, aparecimento de cor amarelada na pele ou na parte branca dos olhos, coceira, erupção na pele ou dor na parte superior do estômago."
    },
    
    {
      nome: "Etomidato", 
      imagem: "img/Etomidato.png",
      indicacoesLista: [
        "Hipnótico intravenoso de ação curta, indicado para a indução da anestesia geral.",
        "Pode ser mantida sem a associação com anestésicos inalatórios (anestesia inteiramente intravenosa), ou com a participação destes em proporções limitadas.",
        "Particularmente indicado para intervenções de curta duração (menos de 10 minutos), procedimentos diagnósticos e intervenções realizadas em ambulatório, quando se deseja recuperação rápida com boas condições de orientação, deambulação e equilíbrio."
      ],
      diluicao: "Soro SF 0,9%; SG 0,5%",
      vias: "Intravenoso",
      incompatibilidade: "Contraindicado em pacientes com hipersensibilidade conhecida ao etomidato ou aos excipientes da formulação.",
      reacoes: "Diminuição da pressão arterial, dificuldade para respirar ou respiração lenta, rigidez muscular, dificuldade para controlar os movimentos do corpo ou dos olhos, vômitos, náuseas e urticária na pele."
    },
    
    {
      nome: "Enoxaparina", 
      imagem: "img/Enoxaparina.png",
      indicacoesLista: [
        "Profilaxia de tromboembolismo venoso (TEV) após cirurgias de grande porte, como ortopédicas ou abdominais.",
        "Profilaxia para pacientes acamados por doenças agudas.",
        "Tratamento de trombose venosa profunda (TVP) e embolia pulmonar (EP).",
        "Síndromes coronarianas agudas: Angina instável e infarto agudo do miocárdio (IAM).",
        "Prevenção de complicações tromboembólicas em pacientes com câncer."
      ],
      diluicao: "A enoxaparina é geralmente administrada subcutaneamente sem diluição. Para via intravenosa, pode ser diluída em solução salina a 0,9% ou glicose a 5%, conforme orientação médica.",
      vias: "Subcutânea (SC), Intravenosa (IV)",
      incompatibilidade: "Não deve ser misturada com outros medicamentos na mesma seringa ou bolsa de infusão. A administração simultânea com outros anticoagulantes, como varfarina ou heparina, pode aumentar o risco de sangramentos.",
      reacoes: "Comuns: Hematomas no local da injeção. Hemorragias (dependendo da dose e da condição do paciente). Trombocitopenia (queda de plaquetas)."
    },
    
    {
      nome: "Fenitoina (Hidantal)", 
      imagem: "img/Fenitoina (Hidantal).png",
      indicacoesLista: [
        "Tratamento de crises convulsivas durante ou após neurocirurgia.",
        "Tratamento de crises convulsivas, crises tônico-clônicas generalizadas e crise parcial complexa (lobo psicomotor e temporal).",
        "Tratamento de estado de mal epiléptico."
      ],
      diluicao: "As soluções de cloreto de sódio 0,9% devem ser a escolha no caso da necessidade de diluição do medicamento.",
      vias: "Intramuscular / intravenoso",
      incompatibilidade: "Contraindicado em pacientes que apresentaram reações intensas ao medicamento ou a outras hidantoínas, e em pacientes que apresentam síndrome.",
      reacoes: "Nistagmo (movimento involuntário), vertigem, prurido, parestesia (coceira), cefaleia."
    },
    
    {
      nome: "Fentanil (Citrato De Fentanila)", 
      imagem: "img/Fetanil (Citrato De Fetanila).png",
      indicacoesLista: [
        "Analgesia de curta duração durante o período anestésico (pré-medicação, indução e manutenção).",
        "Uso no período pós-operatório imediato (sala de recuperação).",
        "Componente analgésico da anestesia geral e suplemento da anestesia regional.",
        "Uso como agente anestésico único com oxigênio em pacientes de alto risco, como os submetidos a cirurgia cardíaca ou procedimentos neurológicos e ortopédicos difíceis.",
        "Administração epidural no controle da dor pós-operatória, operação cesariana ou cirurgia abdominal."
      ],
      diluicao: "Essa quantidade de 2 mL deve ser diluída em 8 mL de solução salina a 0,9% resultando em uma concentração final de 10 mcg/mL.",
      vias: "Uso epidural, intravenoso e intramuscular.",
      incompatibilidade: "É contraindicada para o tratamento da dor aguda ou da dor pós-operatória, pois não permite ajuste de dose durante uso em curto período e pode ocorrer hipoventilação grave ou de risco à vida.",
      reacoes: "Depressão respiratória, apneia, rigidez, bradicardia."
    },
    
    {
      nome: "Gardenal", 
      imagem: "img/Gardenal.png",
      indicacoesLista: [
        "Barbitúrico com propriedades anticulvacionantes, devido à sua capacidade de elevar o limiar de convulsões.",
        "Utilizado para prevenir o aparecimento de convulsões em indivíduos com epilepsia ou crises convulsivas de outras origens."
      ],
      diluicao: "As gotas devem ser diluídas em água.",
      vias: "Oral",
      incompatibilidade: "Porfiria, hipersensibilidade conhecida aos barbitúricos, insuficiência respiratória severa, insuficiência hepática e renal graves, uso de saquinavir, daclatasvir, dasabuvir, paritaprevir, ombitasvir, ledipasvir e sofosbuvir.",
      reacoes: "Distúrbios psiquiátricos, distúrbio no sistema nervoso, distúrbios gastrintestinais, distúrbios hepatobiliares, distúrbios na pele e tecido subcutâneo."
    },
    
    {
      nome: "Haldol (Haloperidol)", 
      imagem: "img/Haldol (Haloperidol).jpg",
      indicacoesLista: [
        "Agente antipsicótico para delírios e alucinações na esquizofrenia aguda e crônica.",
        "Utilizado na confusão mental aguda.",
        "Agente antiagitação psicomotora para mania, demência, agitação e agressividade no idoso.",
        "Tratamento de distúrbios graves de comportamento, psicoses infantis acompanhadas de excitação psicomotora, movimentos coreiformes, tiques e síndromes de Tourette.",
        "Uso como antiemético para náuseas e vômitos incoercíveis de várias origens."
      ],
      diluicao: "O Haldol (Haloperidol) pode ser administrado sem diluição via intramuscular (IM) ou diluído em solução salina 0,9% ou glicose 5% para via intravenosa (IV), conforme orientação médica.",
      vias: "Oral e intramuscular",
      incompatibilidade: "Alprazolam ou buspirona, fluoxetina, fluvoxamina, nefazodona, paroxetina, sertralina, venlafaxina, carbamazepina, itraconazol, ritonavir, clorpromazina ou prometazina.",
      reacoes: "Não especificado"
    },
    
    {
      nome: "Hidrocortisona", 
      imagem: "img/Hidrocortisona.png",
      indicacoesLista: [
        "Tratamento de insuficiência adrenal aguda (crise adrenal).",
        "Utilizada em choque anafilático e reações alérgicas severas (ex.: angioedema).",
        "Tratamento de asma grave.",
        "Tratamento de doenças reumatológicas (ex.: artrite reumatoide).",
        "Tratamento de doenças dermatológicas (ex.: dermatite atópica severa).",
        "Tratamento de condições oftalmológicas (ex.: inflamação intraocular).",
        "Prevenção de rejeição em transplantes de órgãos."
      ],
      diluicao: "A hidrocortisona é geralmente diluída em solução salina 0,9% ou solução de glicose 5%, dependendo do uso clínico. Exemplo: Para administração intravenosa (IV), o pó liofilizado pode ser reconstituído com água para injeção e depois diluído para infusão.",
      vias: "Intravenosa (IV), Intramuscular (IM), Tópica, Oral, Intra-articular ou intralesional.",
      incompatibilidade: "Não deve ser misturada com outros medicamentos na mesma solução ou via, pois pode haver incompatibilidade física ou química, como precipitação. Exemplos de incompatibilidades comuns incluem: Heparina, antibióticos como aminoglicosídeos, soluções alcalinas como bicarbonato de sódio.",
      reacoes: "Reações muito comuns: Distúrbios do sistema nervoso (distúrbios extrapiramidais, hipercinesia), tremor, hipertonia, distonia, sonolência, bradicinesia. Reações raras: Agranulocitose, pancitopenia, trombocitopenia, leucopenia, reação anafilática, hipersensibilidade, hipoglicemia, transtorno psicótico, agitação, depressão, insônia, convulsão, cefaleia, distúrbios cardíacos, broncoespasmo, laringoespasmo, insuficiência hepática aguda, hepatite, colestase, icterícia."
    },
    
    {
      nome: "Insulina NPH: NOVOLIN°N", 
      imagem: "img/Insulina.png",
      indicacoesLista: [
        "Tratamento de diabetes mellitus."
      ],
      diluicao: "É necessário rolar o frasco de insulina 20 vezes entre as mãos para homogeneizar a solução.",
      vias: "Subcutânea",
      incompatibilidade: "Hipersensibilidade à substância ativa ou a qualquer um dos excipientes (vide “Composição”).",
      reacoes: "Distúrbios do sistema imune, distúrbios do metabolismo e nutrição, distúrbios do sistema nervoso, distúrbios da visão, distúrbios da pele e do tecido subcutâneo, distúrbios gerais e condições do local de aplicação."
    },
    
    {
      nome: "Morfina", 
      imagem: "img/Morfina.jpg",
      indicacoesLista: [
        "Tratamento de dor moderada a intensa (aguda ou crônica).",
        "Uso em dor oncológica, pós-operatória ou dor associada a infarto do miocárdio."
      ],
      diluicao: "Diluentes: Soro fisiológico (NaCl 0,9%) ou água destilada. Exemplo: Para 1 mg/mL em 10 mL, dilua 1 mL de morfina (10 mg/mL) com 9 mL de diluente.",
      vias: "Intravenosa (IV), intramuscular (IM), subcutânea (SC) ou via epidural/intratecal (uso especializado). Ajustar a velocidade de infusão conforme a prescrição.",
      incompatibilidade: "Não misturar com fentanil, heparina, fenitoína, aminofilina e soluções alcalinas (ex.: bicarbonato de sódio). Observar alterações físicas (turvação, precipitação).",
      reacoes: "Comuns: Náusea, vômito, constipação, sedação, prurido. Graves: Depressão respiratória, hipotensão, dependência física/psicológica."
    },
    
    {
      nome: "Naloxona", 
      imagem: "img/Naloxona.png",
      indicacoesLista: [
        "Antagonista de opioide indicado para o tratamento de emergência de superdose ou intoxicação aguda por opioide, que se manifesta por depressão respiratória e/ou depressão do sistema nervoso central.",
        "Reversão completa ou parcial dos efeitos adversos de opioides, especialmente depressão respiratória.",
        "Utilizado no diagnóstico de superdose aguda por opioides, como morfina, metadona, nalbufina, tramadol, buprenorfina e sufentanila.",
        "Reversão da depressão respiratória em neonatos cujas mães receberam opioides durante o trabalho de parto."
      ],
      diluicao: "A adição de 2 mg (5 ampolas) de cloridrato de naloxona em 500 mL de cloreto de sódio 0,9% ou solução de glicose 5% fornece a concentração de 0,004mg. Superdose: Não é recomendado diluição.",
      vias: "O cloridrato de naloxona pode ser administrado por via intravenosa, intramuscular ou subcutânea. Em situações de emergência, a medida inicial principal é a assistência ventilatória contínua ao paciente, seja por máscara com reservatório ou intubação orotraqueal e ventilação mecânica.",
      incompatibilidade: "Interações: Naloxona pode interagir com analgésicos opioides, como a nalbufina. Metoexital: Pode bloquear sintomas de abstinência induzidos por naloxona.",
      reacoes: "Precaução: Usar com cautela em pacientes com doenças cardíacas ou efeitos cardiovasculares adversos. Buprenorfina: Requer doses altas de naloxona para reversão devido à longa duração da buprenorfina. Infusões: Não devem ser misturadas com certas substâncias ou soluções alcalinas."
    },

    {
      nome: "Nitroglicerina", 
      imagem: "img/Nitroglicerina.jpg",
      indicacoesLista: [
        "Tratamento de hipertensão perioperatória.",
        "Controle de insuficiência cardíaca congestiva.",
        "Ajuste do infarto agudo do miocárdio.",
        "Tratamento de angina pectoris."
      ],
      diluicao: "Deve ser diluído em glicose (5%) ou cloreto de sódio (0,9%) antes da realização da infusão. O equipo usado para infusão pode influenciar na quantidade de nitroglicerina administrada ao paciente e requer atenção para a resposta clínica.",
      vias: "Nitroglicerina é destinada apenas para uso intravenoso. Não administrar por injeção intravenosa direta.",
      incompatibilidade: "Alteplase: Nitroglicerina pode reduzir sua concentração sérica. Diazóxido: Pode aumentar o efeito hipotensor dos anti-hipertensivos. Metilfenidato: Pode reduzir o efeito hipotensor dos anti-hipertensivos. Inibidores de Fosfodiesterase-5: Podem intensificar o efeito vasodilatador dos nitratos. Análogos da Prostaciclina: Podem aumentar o efeito hipotensor dos anti-hipertensivos. Rituximabe: Anti-hipertensivos podem intensificar seu efeito hipotensor. Rosiglitazona: Nitratos podem aumentar o risco de isquemia miocárdica. Álcool: Pode intensificar o efeito hipotensor da nitroglicerina. Fitoterápicos: Alguns fitoterápicos com efeito hipotensor (ex. gengibre, ginseng, cola, alcaçuz, quinino) podem potencializar o efeito dos anti-hipertensivos.",
      reacoes: "Vertigem, cefaleia, sincope, hipotensão, hipertensão rebote."
    },
    
    {
      nome: "Profenid", 
      imagem: "img/Profenid.png",
      indicacoesLista: [
        "Dores pós-operatórias.",
        "Dores musculoesqueléticas agudas.",
        "Crises de dor em doenças crônicas (artrite reumatoide, osteoartrite).",
        "Dores de origem inflamatória (bursite, tendinite)."
      ],
      diluicao: "É importante verificar a compatibilidade do Profenid EV com a solução intravenosa utilizada. Normalmente, é compatível com soluções salinas (NaCl 0,9%) e Ringer lactato, mas a compatibilidade deve ser confirmada antes da administração. Solução de Ringer Lactato: Outra opção frequentemente utilizada, especialmente em pacientes que necessitam de reposição de eletrólitos.",
      vias: "Via Intramuscular (IM): Administrado no quadrante superior externo do glúteo ou no músculo vasto lateral da coxa. Dose usual para adultos: 100 mg a 200 mg por dia, conforme prescrição médica.",
      incompatibilidade: "Outros AINEs: Evitar a mistura com outros anti-inflamatórios não esteroidais, pois pode aumentar o risco de efeitos adversos, como úlceras gastrointestinais e sangramentos. Anticoagulantes: A combinação com anticoagulantes como heparina ou varfarina pode aumentar o risco de sangramentos. Diuréticos: A combinação pode diminuir a eficácia dos diuréticos e aumentar o risco de neurotoxicidade. Anti-hipertensivos: Pode reduzir a eficácia de medicamentos anti-hipertensivos, como inibidores da ECA e betabloqueadores.",
      reacoes: "Náuseas e vômitos, dor abdominal e diarreia, reações no local da injeção (dor, vermelhidão, inchaço), reações alérgicas (erupções cutâneas), alterações na função renal, sangramento gastrointestinal."
    },
    
    {
      nome: "Tazocin", 
      imagem: "img/Tazocin.png",
      indicacoesLista: [
        "Infecções do trato respiratório inferior.",
        "Infecções do trato urinário.",
        "Infecções intra-abdominais.",
        "Infecções da pele e tecidos moles.",
        "Sepse bacteriana.",
        "Infecções ginecológicas, incluindo endometrite pós-parto e doença inflamatória pélvica (DIP).",
        "Infecções neutropênicas febris.",
        "Infecções osteoarticulares.",
        "Infecções polimicrobianas (microrganismos Gram-positivos/Gram-negativos aeróbios e anaeróbios)."
      ],
      diluicao: "Cada frasco-ampola de Tazocin® 2,25 g deverá ser reconstituído com 10 mL de um dos diluentes acima. Após a reconstituição, espera-se um volume final aproximado de 11,5 mL de solução dentro do frasco. Cada frasco-ampola de Tazocin® 4,5 g deverá ser reconstituído com 20 mL de um dos diluentes acima.",
      vias: "Exclusivamente para via intravenosa.",
      incompatibilidade: "Devido à instabilidade química, Tazocin® não deve ser usado em soluções que contenham somente bicarbonato de sódio. Sempre que Tazocin® for utilizado concomitantemente a outro antibiótico (p.ex., aminoglicosídeos, que não amicacina e gentamicina nas especificações recomendadas), os medicamentos devem ser administrados separadamente. A mistura de Tazocin® com um aminoglicosídeo in vitro pode inativar consideravelmente o aminoglicosídeo.",
      reacoes: "A suspeita de efeitos indesejáveis é baseada nos estudos clínicos e/ou taxas de relatos espontâneos de póscomercialização. Reações adversas por sistema de classe de órgãos (SOC) e categorias de frequência do Conselho das Organizações Internacionais de Ciências Médicas (CIOMS) listadas em ordem decrescente de gravidade médica ou importância clínica dentro de cada categoria de frequência e SOC."
    }
    


];

function montarLista(lista = listaDeRemedios) {
  lista.forEach((card, index) => {
    var cardHTML = document.createElement("li");
    cardHTML.classList.add("listaRemedios");

    cardHTML.innerHTML = `
      <img class="imagensCard" src="${card.imagem}">
      <h2 class="subtitulo">${card.nome}</h2>

      <button type="button" class="button-3" data-bs-toggle="modal" data-bs-target="#myInfo${index}">Saiba Mais!</button>
      
      <div class="modal fade" id="myInfo${index}" tabindex="-1" aria-labelledby="myInfo${index}" aria-hidden="true">
        <div class="modal-dialog border border-success">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-success" id="myInfo${index}">Informações do remedio: ${card.nome}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <div class="accordion" id="accordionExample${index}">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne${index}" aria-expanded="false" aria-controls="collapseOne${index}">
                      Indicações
                    </button>
                  </h2>
                  <div id="collapseOne${index}" class="accordion-collapse collapse" data-bs-parent="#accordionExample${index}">
                    <div class="accordion-body">
               
                      <ol id="ulIndicacao${index}">
                      </ol>

                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion" id="accordionExample${index}">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo${index}" aria-expanded="false" aria-controls="collapseOne${index}">
                      Diluição
                    </button>
                  </h2>
                  <div id="collapseTwo${index}" class="accordion-collapse collapse" data-bs-parent="#accordionExample${index}">
                    <div class="accordion-body">
                      <p class="pTamanho">${card.diluicao || "Não há informações sobre diluição."}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion" id="accordionExample${index}">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree${index}" aria-expanded="false" aria-controls="collapseOne${index}">
                      Vias
                    </button>
                  </h2>
                  <div id="collapseThree${index}" class="accordion-collapse collapse" data-bs-parent="#accordionExample${index}">
                    <div class="accordion-body">
                      <p class="pTamanho">${card.vias || "Não há informações sobre vias."}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion" id="accordionExample${index}">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive${index}" aria-expanded="false" aria-controls="collapseOne${index}">
                      Imcompatibilidades
                    </button>
                  </h2>
                  <div id="collapseFive${index}" class="accordion-collapse collapse" data-bs-parent="#accordionExample${index}">
                    <div class="accordion-body">
                      <p class="pTamanho">${card.incompatibilidade || "Não há informações sobre incompatibilidades."}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="accordion" id="accordionExample${index}">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix${index}" aria-expanded="false" aria-controls="collapseOne${index}">
                      Reações adversas
                    </button>
                  </h2>
                  <div id="collapseSix${index}" class="accordion-collapse collapse" data-bs-parent="#accordionExample${index}">
                    <div class="accordion-body">
                      <p class="pTamanho">${card.reacoes || "Não há informações sobre reações adversas."}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-success" data-bs-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>`;
    listaHTML.appendChild(cardHTML);
    var listaIndicacao =  document.getElementById("ulIndicacao"+index)
    console.log(listaIndicacao)
    card.indicacoesLista.forEach(indicacao=> {
      var li = document.createElement("li")
      li.classList.add("liIndicacoes")
      li.innerText = indicacao
      listaIndicacao.appendChild(li)
      
    })  
    
  });
};

montarLista();


function procurarRemedio(input) {
  var remedioProcurado = input.value.toLowerCase();
  var resultados = listaDeRemedios.filter(remedio => remedio.nome.toLowerCase().includes(remedioProcurado));
  listaHTML.innerHTML = "";
  montarLista(resultados);
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {

    const button = event.relatedTarget

    const recipient = button.getAttribute('data-bs-whatever')

    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}
