# Factor(요인)
- 요인(factor)은 R의 데이터 중에서 하나이며 벡터의 한 종류
- 요인은 주로 집단별로 자료를 분석하고자 할 때에 특정 자료를 범주형 자료로 변경해 줌
- 벡터와 요인 모두 1차원의 형태로 자료가 되어 있음

분류  | 설명
:---: | :---
벡터 | 범주형 자료로 인식하지 못함
요인 | 범주형 자료로 인식함

## Factor 만들기
`factor()` 함수를 이용해 만든다.
argument | 설명
---|---
x | 벡터를 지정
levels | 그룹으로 지정할 문자형 벡터를 지정하며, levels를 쓰지 않으면 <br />오름차순으로 구분하여 자체적으로 그룹을 지정
labels | levels에 대한 문자형 벡터를 지정
ordered | levels에 대해 특정한 순서를 정하고 싶으면 TRUE를 지정

```r
# 요인(범주형 데이터)의 생성 == factor
gender <- c("m", "f", "f", "m", "f")
gender # [1] m f f m f

gender_factor = factor(gender) # 범주형 자료로 만들기
gender_factor # Levels: f m 
```