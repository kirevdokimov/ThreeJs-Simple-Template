(()=>{var e=window.innerWidth,n=window.innerHeight,i=new THREE.WebGLRenderer;i.setSize(e,n),document.body.appendChild(i.domElement);var t=new THREE.Scene,d=new THREE.PerspectiveCamera(45,e/n,.1,1e4);d.position.z=50,t.add(d);var r=new THREE.PointLight(16777215);r.position.set(-100,200,100),t.add(r);var o=new THREE.OrbitControls(d,i.domElement),a=new THREE.AxisHelper(50);t.add(a);var E=new THREE.BoxGeometry(5,5,5),w=new THREE.MeshNormalMaterial,s=new THREE.Mesh(E,w);function H(){let e=window.innerWidth,n=window.innerHeight;i.setSize(e,n),d.aspect=e/n,d.updateProjectionMatrix()}t.add(s),H(),function e(){i.render(t,d),o.update(),requestAnimationFrame(e)}(),window.addEventListener("resize",H)})();