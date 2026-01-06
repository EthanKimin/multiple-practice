import { useState, useCallback, useMemo } from "react";

/**
 * 테스트 페이지의 메뉴 선택 로직을 관리하는 커스텀 훅
 * @param {Array} menuItems - 메뉴 아이템 배열
 * @param {string} defaultType - 기본 선택될 타입 (선택사항)
 */
const useTestLogic = (menuItems, defaultType = null) => {
  const [selectedType, setSelectedType] = useState(defaultType);

  // 메뉴 클릭 핸들러 메모이제이션
  const handleMenuClick = useCallback((type) => {
    setSelectedType(type);
  }, []);

  // 선택된 아이템 계산 메모이제이션
  const selectedItem = useMemo(
    () => menuItems.find((item) => item.id === selectedType),
    [menuItems, selectedType]
  );

  // 메뉴 초기화 함수 추가 (필요시 사용)
  const resetSelection = useCallback(() => {
    setSelectedType(defaultType);
  }, [defaultType]);

  return {
    selectedType,
    selectedItem,
    handleMenuClick,
    resetSelection,
  };
};

export default useTestLogic;
