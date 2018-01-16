/*
    // https://semantic-ui.com/elements/button.html
    1. 유효하지 않은 테마를 설정하면, 타입에러가 발생한다.
    2. 유효하지 않은 사이즈를 설정하면, 타입에러가 발생한다.
    3. 버튼을 클릭하면, 콜백함수가 실행된다.

    // 기본 속성
    * type - one of ['button', 'submit']. default 'button'
    * disabled - one of [true, false]. default false
    * autofocus - one of [true, false]. default false

    // 커스텀 속성
    * theme - one of ['primary', 'secondary', 'positive', 'negative']. default null
    * size - one of ['tiny', 'small', 'large', 'big']. default null (? { width: number, height: number })
    * shape - one of ['circle', 'round', 'rectangle']. default 'round'
    * transparent - one of [true, false]. default false
*/

/*
    function Button() {}

    new Button();

    new Button({
        theme: 'primary'
    });

    new Button({
        theme: 'primary',
        size: 'small'
    });

    new Button({
        theme: 'primary',
        size: 'small',
        transparent: true
    });

    new Button({
        theme: 'primary',
        size: 'small',
        disabled: true
    });
*/