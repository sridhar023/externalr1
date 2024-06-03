function *gen1(i){
     yield i+1;
    yield i+2;
    }
    
    function *gen2(i){
     yield i;
     yield * gen1(i)
     yield i+4
    }
    const g=gen2(10)
    console.log(g.next().value)
    console.log(g.next().value)
    console.log(g.next().value)
    console.log(g.next().value)
    