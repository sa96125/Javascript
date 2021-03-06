// 정렬되어진 배열이 존재한다.
// 음수의 양수의 쌍이 존재하는 숫자중 가장 큰 숫자이 쌍을 리턴하는 함수를 만드시오. 

// > [-4, -3, -1, 0, 2, 3, 5]  
// < [-3, 3]

function getSumzero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
        }
    }
    return -1;
}//--------------------------------------------------------------------------------------------------> 시간복잡도 O(n**2)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                            R E F A C T O R I N G                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//더블포인터, 이분법처럼 사용하면 된다. 정렬되어 있다는 특징을 이용한다.
function mutiplePointerPattern(arr) {
    // 처음과 끝의 포인터 지정.
    let targetLeft = 0;
    let targetRight = arr.length - 1;

    // 비교하려는 값이 같아지면 루프는 끝
    while (targetLeft < targetRight) {
        let sum = targetLeft + targetRight;
        if (sum === 0) return [arr[targetLeft], arr[targetRight]];
        else if (sum < 0) targetLeft++;
        else targetRight--;
    }

    return -1;
}//-------------------------------------------------------------------------------------------------->  시간복잡도 O(n)
