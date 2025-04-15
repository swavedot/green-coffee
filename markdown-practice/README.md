# 제목(Header)

# 제목 1
## 제목 2
### 제목 3
#### 제목 4
#### 제목 5
##### 제목 6

# 문장(Pragraph)

동해물과 백두산이 마르고 닳도록
하나님이 보우하사 우리나라 만세

# 줄바꿈(Line Breaks) : 스페이스(띄어쓰기) 두번

동해물과 백두산이 마르고 닳도록  
하나님이 보우하사 우리나라 만세  
동해물과 백두산이   
마르고 닳도록<br/>
하나님이 보우하사 우리나라 만세

# 강조(Emphasis)

_이텔릭_  
**두껍게**  
**_이텔릭 + 두껍게_**  
~~취소선~~  
<u>밑줄</u>  

# 목록(List)

1. 숫자가 필요한 목록
1. 숫자가 필요한 목록
1. 숫자가 필요한 목록  
      1. 순서가 있는 목록
      1. 순서가 있는 목록
      1. 순서가 있는 목록
1. 숫자가 필요한 목록

- 순서가 필요하지 않는 목록
- 순서가 필요하지 않는 목록
- 순서가 필요하지 않는 목록
    - 순서가 필요하지 않는 목록
    - 순서가 필요하지 않는 목록
- 순서가 필요하지 않는 목록

# 링크(Links)

<a href="https://google.com">GOOGLE</a>  
[GOOGLE](https://google.com)

<a href="https://naver.com" title="Naver로 이동">NAVER</a>  
[NAVER](https://naver.com "Naver로 이동")  

<!-- 마크다운은 target속성을 제공하지 않으므로 HTML 태그 그대로 사용 -->
<a href="https://naver.com" title="Naver로 이동" target="_blank">NAVER</a>  

# 이미지(Images)

![fuzzy coffee](https://venerable-bienenstitch-6a7bd0.netlify.app/images/logo.png)

[![fuzzy coffee](https://venerable-bienenstitch-6a7bd0.netlify.app/images/logo.png)](https://venerable-bienenstitch-6a7bd0.netlify.app/)

# 인용문(BlockQuote)

> 남의 말이나 글에서 직접 또는 간접적으로 따온 문장.  
> (나무위키)

> 인용문을 작성하자!
>> 중첩된 인용문
>>> 중중첩된 인용문 1  
>>>> 중중첩된 인용문 2  
>>>>> 중중첩된 인용문 3  

# 인라인(Inline) 코드 강조

CSS에서 `background` 또는 `background-image` 속성으로 요소에 배경이미지를 삽입할 수 있습니다.

# 블록(Block) 코드 강조

```html
<a href="https://google.com" target="_blank">GOOGLE</a>
```
```javascript
function func(){
  let a = 'AAA';
  return a;
}
```
``` bash
$ git commit -m 'Markdown'
```
``` text
동해물과 백두산이 마르고 닳도록  
하나님이 보우하사 우리나라 만세
```

# 표(Table)

positon 속성  

값 | 의미 | 기본값
--|:--:|--:
static | 기준 없음 |  0
relative | 요소자신 | x
absolute | 위치 상 부모 요소 | x
fixed | 뷰포트 | x

# 원시 HTML(Raw HTML)

동해물과 백두산이 마르고 닳도록<br/>
하나님이 보우하사 <u>우리나라</u> 만세

동해물과 백두산이 마르고 닳도록<br/>
하나님이 보우하사 <span style="text-decoration:underline">우리나라</span> 만세

<a href="https://google.com" target="_blank">GOOGLE</a>

<img src="https://venerable-bienenstitch-6a7bd0.netlify.app/images/logo.png" alt="로고  ">

# 수평선(Horizontal Rule)
--- 

***

___

