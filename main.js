			import * as THREE from 'three';

			import TWEEN from 'three/addons/libs/tween.module.js';
			import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
			import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

			const table = [
				'M', 'Ahmad', '21', 1, 1, 
        'M', 'Abu', '16', 18, 1, 
        'M', 'Ali', '11', 1, 2, 
        'M', 'Haziq', '23', 2, 2, 
        'M', 'Henry', '12', 13, 2, 
        'F', 'Geogina', '12', 14, 2, 
        'M', 'Musalman', '32', 15, 2, 
        'F', 'Hawa', '23', 16, 2, 
        'F', 'Sarah', '24', 17, 2, 
        'M', 'Meon', '20', 18, 2, 
        'M', 'Raziq', '22', 1, 3, 
        'M', 'Manimaran', '24', 2, 3, 
        'F', 'Fatimah', '26', 13, 3, 
        'F', 'Caihong', '28', 14, 3, 
        'F', 'Peijing', '32', 15, 3, 
        'F', 'Haziqah', '23', 16, 3, 
        'F', 'Alya', '23', 17, 3, 
        'F', 'Nur', '22', 18, 3,
        'M', 'Afnan', '23', 1, 4, 
        'M', 'Afiq', '23', 2, 4, 
        'F', 'Farah', '24', 3, 4, 
        'F', 'Wardina', '23', 4, 4, 
        'F', 'Chen', '25', 5, 4, 
        'F', '`Yeong', '21', 6, 4, 
        'M', 'Malik', '25', 7, 4, 
        'F', 'Nurin', '26', 8, 4, 
        'F', 'Chan', '28', 9, 4, 
        'F', 'Aqila', '21', 10, 4, 
        'F', 'Kamilla', '23', 11, 4, 
        'F', 'Nurul', '27', 12, 4, 
        'M', 'Danial', '27', 13, 4, 
        'F', 'Yin', '17', 14, 4, 
        'F', 'Zihan', '20', 15, 4, 
        'F', 'Charvi', '21', 16, 4, 
        'F', 'Anahita', '29', 17, 4, 
        'M', 'Nirvaan', '23', 18, 4, 
        'M', 'Taksh', '32', 1, 5, 
        'F', 'Cahaya', '23', 2, 5, 
        'M', 'Vindram', '25', 3, 5, 
        'F', 'Alyah', '31', 4, 5, 
        'M', 'Adnan', '36', 5, 5, 
        'M', 'Muhd', '18', 6, 5, 
        'M', 'Krishnan', '40', 7, 5, 
        'F', 'Ishita', '37', 8, 5,
        'M', 'Mahmud', '19', 9, 5, 
        'F', 'Aisyah', '23', 10, 5, 
        'M', 'Said', '27', 11, 5, 
        'F', 'Iman', '22', 12, 5, 
        'M', 'Faruuq', '29', 13, 5, 
        'F', 'Tin', '41', 14, 5, 
        'F', 'Husna', '21', 15, 5, 
        'F', 'Ummi', '18', 16, 5, 
        'F', 'Hani', '21', 17, 5, 
        'M', 'Hasan', '17', 18, 5, 
        'M', 'Husin', '18', 1, 6, 
        'M', 'Fateh', '20', 2, 6, 
        'F', 'Anis', '24', 4, 9, 
        'F', 'Humaira', '23', 5, 9, 
        'F', 'Jiya', '31', 6, 9, 
        'F', 'Jaya', '34', 7, 9, 
        'M', 'Ishir', '15', 8, 9, 
        'M', 'Lakshay', '22', 9, 9, 
        'M', 'Nirvaan', '23', 10, 9, 
        'F', 'Erna', '25', 11, 9, 
        'F', 'Sarahh', '22', 12, 9, 
        'F', 'Hanis', '26', 13, 9, 
        'F', 'Mona', '47', 14, 9, 
        'M', 'Ghani', '36', 15, 9, 
        'F', 'Anisah', '21', 16, 9, 
        'F', 'Tan', '28', 17, 9, 
        'F', 'Lakshini', '19', 18, 9, 
        'F', 'Hanum', '33', 4, 6, 
        'F', 'Saidah', '47', 5, 6, 
        'M', 'Omar', '18', 6, 6, 
        'F', 'Nisrina', '18', 7, 6, 
        'F', 'Sumayyah', '19', 8, 6, 
        'F', 'Wahida', '23', 9, 6, 
        'M', 'Azman', '28', 10, 6, 
        'F', 'Gold', '196.966569', 11, 6, 
        'M', 'Waiz', '20', 12, 6, 
        'F', 'Prisha', '20', 13, 6, 
        'F', 'Vardaniya ', '20', 14, 6, 
        'F', 'Bhamini ', '28', 15, 6, 
        'M', 'Raziq', '23', 16, 6, 
        'M', 'Faiyaz', '21', 17, 6, 
        'F', 'Rafidah', '22', 18, 6, 
        'F', 'Daiyu', '23', 1, 7, 
        'F', 'Fen', '26', 2, 7, 
        'F', 'Nuo', '27', 4, 10, 
        'M', 'Chaoxiang', '23', 5, 10, 
        'F', 'Zhan', '23', 6, 10, 
        'F', 'Shu', '23', 7, 10, 
        'F', 'Liling', '27', 8, 10, 
        'F', 'Baozhai', '24', 9, 10, 
        'M', 'Feng', '24', 10, 10, 
        'F', 'Chyou', '47', 11, 10, 
        'M', 'Donghai', '24', 12, 10, 
        'F', 'Ting', '25', 13, 10, 
        'F', 'Nuo', '25', 14, 10, 
        'M', 'Bolin', '27', 15, 10, 
        'M', 'Shanyuan', '28', 16, 10, 
        'M', 'Xiaobo', '29', 17, 10, 
        'F', 'Mei', '26', 18, 10, 
        'F', 'Sophia', '27', 4, 7, 
        'F', 'Hannah', '28', 5, 7, 
        'M', 'Raahim', '21', 6, 7, 
        'M', 'Yusof', '27', 7, 7,
         'M', 'Mohamed', '35', 8, 7, 
         'M', 'Isa', '27', 9, 7, 
         'F', 'Dhia', '28', 10, 7, 
         'F', 'Diana', '20', 11, 7, 
         'F', 'Rozita', '25', 12, 7, 
         'F', 'Syafiqah', '26', 13, 7, 
         'F', 'Athirah', '29', 14, 7, 
         'F', 'Arianna', '20', 15, 7, 
         'F', 'Jannah', '23', 16, 7, 
         'M', 'Aqil', '24', 17, 7, 
         'F', 'Maryam', '29', 18, 7
			];

			let camera, scene, renderer;
			let controls;

			const objects = [];
			const targets = { table: [], sphere: [], helix: [], grid: [], cone: []};

			init();
			animate();

			function init() {

				camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 3000;

				scene = new THREE.Scene();

				// table

				for ( let i = 0; i < table.length; i += 5 ) {

					const element = document.createElement( 'div' );
					element.className = 'element';
          if (table[i] == 'M') {
					element.style.backgroundColor = 'rgba(27, 137, 247,' + ( Math.random() * 0.5 + 0.25 ) + ')';
          }
          else {
            element.style.backgroundColor = 'rgba(199, 26, 135,' + ( Math.random() * 0.5 + 0.25 ) + ')';
          }


					const number = document.createElement( 'div' );
					number.className = 'number';
					number.textContent = ( i / 5 ) + 1;
					element.appendChild( number );

					const symbol = document.createElement( 'div' );
					symbol.className = 'symbol';
					symbol.textContent = table[ i ];
					element.appendChild( symbol );

					const details = document.createElement( 'div' );
					details.className = 'details';
					details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
					element.appendChild( details );

					const objectCSS = new CSS3DObject( element );
					objectCSS.position.x = Math.random() * 4000 - 2000;
					objectCSS.position.y = Math.random() * 4000 - 2000;
					objectCSS.position.z = Math.random() * 4000 - 2000;
					scene.add( objectCSS );

					objects.push( objectCSS );

					//

					const object = new THREE.Object3D();
					object.position.x = ( table[ i + 3 ] * 140 ) - 1330;
					object.position.y = - ( table[ i + 4 ] * 180 ) + 990;

					targets.table.push( object );

				}

				// sphere

				const vector = new THREE.Vector3();

				for ( let i = 0, l = objects.length; i < l; i ++ ) {

					const phi = Math.acos( - 1 + ( 2 * i ) / l );
					const theta = Math.sqrt( l * Math.PI ) * phi;

					const object = new THREE.Object3D();

					object.position.setFromSphericalCoords( 800, phi, theta );

					vector.copy( object.position ).multiplyScalar( 2 );

					object.lookAt( vector );

					targets.sphere.push( object );

				}

				// helix

				for ( let i = 0, l = objects.length; i < l; i ++ ) {

					const theta = i * 0.175 + Math.PI;
					const y = - ( i * 8 ) + 450;

					const object = new THREE.Object3D();

					object.position.setFromCylindricalCoords( 900, theta, y );

					vector.x = object.position.x * 2;
					vector.y = object.position.y;
					vector.z = object.position.z * 2;

					object.lookAt( vector );

					targets.helix.push( object );

				}

				// grid

				for ( let i = 0; i < objects.length; i ++ ) {

					const object = new THREE.Object3D();

					object.position.x = ( ( i % 5 ) * 400 ) - 800;
					object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
					object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

					targets.grid.push( object );

				}

        	//cone
			for ( let i = 0, l = objects.length; i < l; i ++ ) {

				const theta = i * 4 + Math.PI;
				const y = - ( i * 12 ) + 450;
				//const y = i * ((Math.PI / 2) / 2);
				//const y = Math.cos(theta) * 450;

				const object = new THREE.Object3D();
				object.position.setFromCylindricalCoords( 500, theta , y);
				//object.position.set(5 * Math.cos(y), 5 * Math.sin(y), 0);
				
				vector.x = object.position.x * 2;
				vector.y = object.position.y;
				vector.z = object.position.z * 2;

				object.lookAt( vector );

				targets.cone.push( object );
         	
            }

				//

				renderer = new CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.getElementById( 'container' ).appendChild( renderer.domElement );

				//

				controls = new TrackballControls( camera, renderer.domElement );
				controls.minDistance = 500;
				controls.maxDistance = 6000;
				controls.addEventListener( 'change', render );

				const buttonTable = document.getElementById( 'table' );
				buttonTable.addEventListener( 'click', function () {

					transform( targets.table, 2000 );

				} );

				const buttonSphere = document.getElementById( 'sphere' );
				buttonSphere.addEventListener( 'click', function () {

					transform( targets.sphere, 2000 );

				} );

				const buttonHelix = document.getElementById( 'helix' );
				buttonHelix.addEventListener( 'click', function () {

					transform( targets.helix, 2000 );

				} );

				const buttonGrid = document.getElementById( 'grid' );
				buttonGrid.addEventListener( 'click', function () {

					transform( targets.grid, 2000 );

				} );

        		const buttonCone = document.getElementById( 'cone' );
				buttonCone.addEventListener( 'click', function () {

					transform( targets.cone, 2000 );

				} );

				transform( targets.table, 2000 );

				//

				window.addEventListener( 'resize', onWindowResize );

			}

			function transform( targets, duration ) {

				TWEEN.removeAll();

				for ( let i = 0; i < objects.length; i ++ ) {

					const object = objects[ i ];
					const target = targets[ i ];

					new TWEEN.Tween( object.position )
						.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

					new TWEEN.Tween( object.rotation )
						.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

				}

				new TWEEN.Tween( this )
					.to( {}, duration * 2 )
					.onUpdate( render )
					.start();

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

				render();

			}

			function animate() {

				requestAnimationFrame( animate );

				TWEEN.update();

				controls.update();

			}

			function render() {

				renderer.render( scene, camera );

			}

