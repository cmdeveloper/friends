angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('visualizarPerfil', {
      url: '/visualizar_perfil',
      templateUrl: 'templates/visualizarPerfil.html',
      controller: 'visualizarPerfilCtrl'
    })
        
      
    
      
        
    .state('solicitarServicos', {
      url: '/solicitar_servico',
      templateUrl: 'templates/solicitarServicos.html',
      controller: 'solicitarServicosCtrl'
    })
        
      
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('cadastro', {
      url: '/cadastro',
      templateUrl: 'templates/cadastro.html',
      controller: 'cadastroCtrl'
    })
        
      
    
      
    .state('secretSex', {
      url: '/menu',
      abstract:true,
      templateUrl: 'templates/secretSex.html'
    })
      
    
      
        
    .state('secretSex.editarAnuncio', {
      url: '/editar_anuncio',
      views: {
        'side-menu21': {
          templateUrl: 'templates/editarAnuncio.html',
          controller: 'editarAnuncioCtrl'
        }
      }
    })
        
      
    
      
        
    .state('secretSex.termos', {
      url: '/termos',
      views: {
        'side-menu21': {
          templateUrl: 'templates/termos.html',
          controller: 'termosCtrl'
        }
      }
    })
        
      
    
      
        
    .state('secretSex.listaDeServicos', {
      url: '/lista_de_servicos',
      views: {
        'side-menu21': {
          templateUrl: 'templates/listaDeServicos.html',
          controller: 'listaDeServicosCtrl'
        }
      }
    })
        
      
    
      
        
    .state('secretSex.filtrarBusca', {
      url: '/filtro_default',
      views: {
        'side-menu21': {
          templateUrl: 'templates/filtrarBusca.html',
          controller: 'filtrarBuscaCtrl'
        }
      }
    })
        
      
    
      
        
    .state('confirmacaoDoAnunciante', {
      url: '/confirme',
      templateUrl: 'templates/confirmacaoDoAnunciante.html',
      controller: 'confirmacaoDoAnuncianteCtrl'
    })
        
      
    
      
        
    .state('agenda', {
      url: '/agenda',
      templateUrl: 'templates/agenda.html',
      controller: 'agendaCtrl'
    })
        
      
    
      
        
    .state('page', {
      url: '/page',
      templateUrl: 'templates/page.html',
      controller: 'pageCtrl'
    })
        
      
    
      
        
    .state('secretSex.editarPerfil', {
      url: '/editar_perfil',
      views: {
        'side-menu21': {
          templateUrl: 'templates/editarPerfil.html',
          controller: 'editarPerfilCtrl'
        }
      }
    })
        
      
    
      
        
    .state('servicosAgendados', {
      url: '/servicos_agendados',
      templateUrl: 'templates/servicosAgendados.html',
      controller: 'servicosAgendadosCtrl'
    })
        
      
    
      
        
    .state('secretSex.pedido', {
      url: '/pedido',
      views: {
        'side-menu21': {
          templateUrl: 'templates/pedido.html',
          controller: 'pedidoCtrl'
        }
      }
    })
        
      
    
      
        
    .state('perfilUsuario', {
      url: '/perfil_usuario',
      templateUrl: 'templates/perfilUsuario.html',
      controller: 'perfilUsuarioCtrl'
    })
        
      
    
      
    .state('menu', {
      url: '/side-menu22',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
    .state('menu2', {
      url: '/side-menu23',
      abstract:true,
      templateUrl: 'templates/menu2.html'
    })
      
    
      
        
    .state('qUEST2', {
      url: '/quest2',
      templateUrl: 'templates/qUEST2.html',
      controller: 'qUEST2Ctrl'
    })
        
      
    
      
        
    .state('menu2.questao1', {
      url: '/page20',
      views: {
        'side-menu23': {
          templateUrl: 'templates/questao1.html',
          controller: 'questao1Ctrl'
        }
      }
    })
        
      
    
      
        
    .state('page2', {
      url: '/page19',
      templateUrl: 'templates/page2.html',
      controller: 'page2Ctrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/quest2');

});