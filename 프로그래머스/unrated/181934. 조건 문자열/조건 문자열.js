function solution(ineq, eq, n, m) {
    const eqOperater  = ineq+eq;
    if(eqOperater==='<='){
        return n <= m ? 1 : 0;
    } else if(eqOperater==='>='){
        return n >= m ? 1 : 0;
    } else if(eqOperater==='<!'){
        return n < m ? 1 : 0;
    } else if(eqOperater==='>!'){
        return n > m ? 1 : 0;
    }    
}