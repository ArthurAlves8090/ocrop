	var engine, world, bjetin, bolinha;
	var caôzinho, caxinhazinha, caxita, caxitazita, cachassa, caxona;
	var passarinin;
	var tronquinin, tronquinzin, troncasso, tronco;
	var ocropin, ocropizin;
	var plandefundin;
	
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;



	function preload() {

		plandefundin = loadImage("bg.png");



	}

	
	function setup() {
	  createCanvas(windowWidth,windowHeight);

		
	
	engine = Engine.create();
	world = engine.world;
	
		caôzinho = new cao(width/2,height,width,20)
		
		caxinhazinha = new caxinha(1450,800,120,120);
		caxita = new caxinha(1800,800,120,120);
		cachassa = new caxinha(1450,600,120,120);
		caxona = new caxinha(1800,600,120,120);
		caxitazita = new caxinha(1620,500,120,120);

		tronquinin = new tronquin(1625,700,0);
		tronquinzin = new tronquin(1625,500,0);
		troncasso = new tronquin(1625,500,0);

		passarinin = new passarin(1000,100);

		ocropin = new ocrop(1620,800,80,80);
		ocropizin = new ocrop(1620,600,140,140);

	}
	
	function draw() {
	  background(plandefundin);  
	Engine.update(engine);

	caôzinho.display();
	caxinhazinha.display();
	caxita.display();
	cachassa.display();
	caxona.display();
	caxitazita.display();
	
	tronquinin.display();
	troncasso.display();

	passarinin.display();

	ocropin.display();
	ocropizin.display();
	
	}