const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("results");
const suggestions = document.getElementById("suggestions");

// --- 検索処理 ---
searchInput.addEventListener("input", (e) => {
    const query = e.target.value
        .toLowerCase()
        .replace(/\s*;\s*$/, "")
        .trim();

    // 入力が空なら候補も結果も消す
    if (query === "") {
        resultsContainer.innerHTML = "";
        suggestions.innerHTML = "";
        suggestions.classList.add("hidden");
        return;
    }

    // --- 補完リストを表示 ---
    const suggestionData = tailwindData
        .filter(
            (item) =>
                item.property.toLowerCase().includes(query) ||
                item.class.toLowerCase().includes(query)
        )
        .slice(0, 8); // 最大8件表示

    if (suggestionData.length > 0) {
        suggestions.innerHTML = suggestionData
            .map(
                (item) => `
      <li class="p-2 hover:bg-blue-100 cursor-pointer">${item.property}</li>
    `
            )
            .join("");
        suggestions.classList.remove("hidden");
    } else {
        suggestions.innerHTML = "";
        suggestions.classList.add("hidden");
    }

    // --- 検索結果を表示 ---
    const filteredData = tailwindData.filter((item) =>
        item.property.toLowerCase().includes(query)
    );
    displayResults(filteredData);
});

// --- 補完クリック時の動作 ---
suggestions.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        searchInput.value = e.target.textContent;
        suggestions.innerHTML = "";
        suggestions.classList.add("hidden");

        const filteredData = tailwindData.filter((item) =>
            item.property
                .toLowerCase()
                .includes(searchInput.value.toLowerCase())
        );
        displayResults(filteredData);
    }
});

// --- 結果表示（レスポンシブ対応のコピーBTN付き） ---
function displayResults(data) {
    if (data.length === 0) {
        resultsContainer.innerHTML =
            '<p class="text-gray-500">一致するCSSが見つかりません。</p>';
        return;
    }

    resultsContainer.innerHTML = data
        .map(
            (item, index) => `
    <div class="p-4 border rounded-md bg-gray-50 sm:flex sm:items-center sm:justify-between gap-3">
      <!-- 左側（コードとクラス名） -->
      <div class="min-w-0 flex-1">
        <pre class="p-3 bg-gray-200 text-gray-800 rounded-md overflow-x-auto"><code>${item.property}</code></pre>
        <!-- 「.」は消して表示 -->
        <p class="mt-2 font-mono text-blue-600 font-bold text-base break-all">${item.class}</p>
      </div>

      <!-- 右側/下側（コピーBTN） -->
      <div class="sm:ml-4 sm:flex-shrink-0">
        <button
          id="copy-btn-${index}"
          class="w-full sm:w-auto mt-3 sm:mt-0 px-3 py-2 text-sm sm:text-base bg-blue-500 text-white rounded-md
                 hover:bg-blue-600 active:scale-[0.99] transition
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                 disabled:opacity-60 disabled:cursor-default"
          aria-label="Tailwindクラスをコピー"
          onclick="copyToClipboard('${item.class}', 'copy-btn-${index}')"
        >
          コピー
        </button>
      </div>
    </div>
  `
        )
        .join("");
}

// --- コピー機能（UIフィードバック＋押下連打ガード付き） ---
function copyToClipboard(text, buttonId) {
    const btn = document.getElementById(buttonId);
    if (!btn) return;

    // 連打防止
    btn.disabled = true;

    navigator.clipboard
        .writeText("." + text)
        .then(() => {
            // 視覚フィードバック
            const originalText = btn.textContent;
            btn.textContent = "コピー済み";
            btn.classList.remove("bg-blue-500", "hover:bg-blue-600");
            btn.classList.add("bg-green-500");

            // 2秒後に戻す
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove("bg-green-500");
                btn.classList.add("bg-blue-500", "hover:bg-blue-600");
                btn.disabled = false;
            }, 2000);
        })
        .catch(() => {
            // 失敗時のフォールバック表示
            btn.textContent = "コピー失敗";
            btn.classList.remove("bg-blue-500", "hover:bg-blue-600");
            btn.classList.add("bg-red-500");
            setTimeout(() => {
                btn.textContent = "コピー";
                btn.classList.remove("bg-red-500");
                btn.classList.add("bg-blue-500", "hover:bg-blue-600");
                btn.disabled = false;
            }, 2000);
        });
}
