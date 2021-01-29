function sortSelection(arr) {
    for (let i = 0; i < arr.length; i++) {
        let least = 0;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[least]) {
                least = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}//--------------------------------------------------------------------------------------------------> 시간복잡도 O(n**2)

//*********************************************************************************************************************
//*                                           R E F A C T O R I N G                                                   *
//*********************************************************************************************************************
// 버블 정렬과 같이 최악의 경우는 이미 거의 정렬된 데이터를 정렬하는 경우이다.
// 마찬 가지로 쓸때 없는 연산을 줄어 조금이라도 time complexity를 줄여보자.
// 참고로 선택정렬이 버블정렬보다 조금 좋은 편이다. 왜냐하면 스왑이 매순간 일어나지는 않기 때문에:-)

