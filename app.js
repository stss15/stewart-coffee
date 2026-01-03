/**
 * Stewart Coffee - Recipe Guide App
 * Modern JavaScript with latest features
 */

// Recipe data with all content from the Ninja Luxe Café Pro guide
const recipes = Object.freeze({
    // Daily Staples
    latte: {
        title: 'Standard Latte',
        steps: [
            { title: 'Brew Coffee', desc: 'Select Double Espresso on your Ninja' },
            { title: 'Prepare Milk', desc: 'Add 180ml oat or soy milk to the frother' },
            { title: 'Froth', desc: 'Use Setting 3 (Thick) for perfect microfoam' },
            { title: 'Combine', desc: 'Pour frothed milk over espresso in a gentle stream' }
        ],
        tip: 'Setting 3 ensures low-fat plant milk creates a pourable microfoam with good body.'
    },
    cappuccino: {
        title: 'Standard Cappuccino',
        steps: [
            { title: 'Brew Coffee', desc: 'Select Double Espresso on your Ninja' },
            { title: 'Prepare Milk', desc: 'Add 150ml oat or soy milk to the frother' },
            { title: 'Froth', desc: 'Use Setting 4 (Max) for stiff, dry peaks' },
            { title: 'Combine', desc: 'Spoon thick foam onto espresso, then pour remaining milk' }
        ],
        tip: 'Setting 4 forces plant proteins to hold a stiff, dry peak perfect for cappuccino.'
    },
    flatwhite: {
        title: 'Standard Flat White',
        steps: [
            { title: 'Brew Coffee', desc: 'Select Double Espresso into a Small (S) cup' },
            { title: 'Prepare Milk', desc: 'Add 120ml oat or soy milk to the frother' },
            { title: 'Froth', desc: 'Use Setting 3 (Thick)' },
            { title: 'Texture', desc: 'Tap and swirl the jug vigorously to integrate foam into a "wet paint" texture' },
            { title: 'Pour', desc: 'Pour in a steady stream to blend with espresso' }
        ],
        tip: 'The key to a flat white is the "wet paint" texture — swirl vigorously before pouring!'
    },
    americano: {
        title: 'White Americano',
        steps: [
            { title: 'Brew Coffee', desc: 'Select Americano Mode — Medium (M)' },
            { title: 'Prepare Milk', desc: 'Add 60ml oat or soy milk to the frother' },
            { title: 'Froth', desc: 'Use Setting 5 (Cold Froth)' },
            { title: 'Combine', desc: 'Gently pour cold frothed milk into hot americano' }
        ],
        tip: 'Cold-frothed milk integrates better with hot water without separating.'
    },

    // Specialty Hot
    mocha: {
        title: '"Rich" Cacao-Oat Misto',
        steps: [
            { title: 'Make Paste', desc: 'Whisk 1 tsp cocoa powder + 1 tsp brown sugar with a splash of hot water' },
            { title: 'Brew', desc: 'Select Rich Brew — Medium (M), brew directly into the paste' },
            { title: 'Prepare Milk', desc: 'Add 100ml oat milk to the frother' },
            { title: 'Froth', desc: 'Use Setting 3 (Thick)' },
            { title: 'Combine', desc: 'Pour frothed milk over the chocolate coffee' }
        ],
        tip: 'Whisking the cocoa into a paste first prevents lumps and creates rich chocolate flavour.'
    },
    toffeenut: {
        title: 'Toffee-Nut "System Override"',
        steps: [
            { title: 'Add Syrup', desc: 'Add 2 pumps Sugar-Free Toffee Nut to your cup' },
            { title: 'Brew Coffee', desc: 'Select Double Espresso, brew into cup with syrup' },
            { title: 'Prepare Milk', desc: 'Add 180ml oat milk to the frother' },
            { title: 'Froth', desc: 'Use Setting 4 (Max) to add "faux-body" to thin oat milk' },
            { title: 'Pour', desc: 'Pour thick frothed milk over the toffee espresso' }
        ],
        tip: 'The Max Froth setting adds extra body to thin oat milk for a latte-style drink.'
    },
    cortado: {
        title: 'Maple-Soy Cortado',
        steps: [
            { title: 'Add Syrup', desc: 'Add 1 tsp Sugar-Free Maple Syrup to a small cup' },
            { title: 'Brew Coffee', desc: 'Select Single Espresso, brew into cup' },
            { title: 'Prepare Milk', desc: 'Add 60ml soy milk to the frother' },
            { title: 'Froth', desc: 'Use Setting 3 (Thick)' },
            { title: 'Pour', desc: 'Pour equal parts milk to coffee' }
        ],
        tip: 'A cortado is all about balance — equal parts espresso and velvety milk.'
    },

    // Iced & Cold Brew
    shaken: {
        title: 'Brown Sugar Shaken Espresso',
        steps: [
            { title: 'Add Sugar', desc: 'Put 2 tbsp brown sugar in a shaker or jar' },
            { title: 'Brew', desc: 'Select Over Ice — Medium (M), brew hot concentrate onto sugar' },
            { title: 'Shake', desc: 'Add ice and shake vigorously for 15 seconds' },
            { title: 'Prepare Foam', desc: 'Add 120ml oat milk to frother, use Setting 5 (Cold Froth)' },
            { title: 'Assemble', desc: 'Pour shaken espresso into glass, top with cold foam' }
        ],
        tip: 'Brewing hot onto brown sugar creates a rich syrup base that dissolves perfectly.'
    },
    vanillacold: {
        title: '"Zero-G" Vanilla Cold Brew',
        steps: [
            { title: 'Add Syrup', desc: 'Add 1 tbsp Sugar-Free Vanilla to your glass' },
            { title: 'Brew', desc: 'Select Cold Brew — Medium+ (M+), brew into glass' },
            { title: 'Add Ice', desc: 'Fill glass with ice' },
            { title: 'Prepare Foam', desc: 'Add 100ml oat milk to frother, use Setting 5 (Cold Froth)' },
            { title: 'Top', desc: 'Float cold foam on top' }
        ],
        tip: 'The "Zero-G" name comes from the weightless cold foam floating perfectly on top.'
    },
    saltedcaramel: {
        title: 'Salted Caramel Cold-Pressed',
        steps: [
            { title: 'Prepare Glass', desc: 'Add 1 pump SF Caramel + a pinch of sea salt to glass' },
            { title: 'Brew', desc: 'Select Cold Pressed Espresso (Double), brew into glass' },
            { title: 'Add Ice', desc: 'Fill with ice and stir to combine' },
            { title: 'Prepare Foam', desc: 'Add 150ml oat milk to frother, use Setting 5 (Cold Froth)' },
            { title: 'Top', desc: 'Pour cold foam on top' }
        ],
        tip: 'The salt enhances the caramel sweetness — a little goes a long way!'
    },

    // Frappés
    velvet: {
        title: '"Velvet" Oat Frappé',
        steps: [
            { title: 'Brew Coffee', desc: 'Select Double Espresso, allow to cool slightly' },
            { title: 'Prepare Milk', desc: 'Add 150ml oat milk to frother, use Setting 5 (Cold Froth)' },
            { title: 'Add Syrup', desc: 'Add 1 pump Sugar-Free Syrup of choice to blender' },
            { title: 'Combine', desc: 'Add cooled espresso, cold frothed milk, and 1 cup ice to blender' },
            { title: 'Blend', desc: 'Blend for 20-30 seconds until smooth' }
        ],
        tip: 'The Cold Froth milk provides the emulsification needed for a creamy finish without dairy.'
    },
    mochafrappe: {
        title: 'Soya Mocha Frappé',
        steps: [
            { title: 'Brew Coffee', desc: 'Select Double Espresso' },
            { title: 'Make Base', desc: 'Dissolve 1 tbsp cocoa powder + 1 tsp brown sugar in hot espresso' },
            { title: 'Prepare Milk', desc: 'Add 150ml soy milk to frother, use Setting 5 (Cold Froth)' },
            { title: 'Cool Slightly', desc: 'Let the mocha base cool for 1-2 minutes' },
            { title: 'Blend', desc: 'Add mocha base, cold frothed soy milk, and 1 cup ice to blender. Blend until thick.' }
        ],
        tip: 'Dissolving cocoa in hot espresso first ensures no chalky texture in your frappé.'
    }
});

// App state
const state = {
    currentScreen: 'menu',
    navigationHistory: ['menu'],
    touchStartX: 0,
    touchStartY: 0,
    isModalOpen: false
};

// DOM Elements (cached for performance)
const elements = {
    screens: null,
    modal: null,
    recipeDetail: null,
    modalClose: null
};

/**
 * Initialize the app
 */
function init() {
    // Cache DOM elements
    elements.screens = document.querySelectorAll('.screen');
    elements.modal = document.getElementById('recipe-modal');
    elements.recipeDetail = document.getElementById('recipe-detail');
    elements.modalClose = elements.modal?.querySelector('.modal-close');

    // Set up event listeners
    setupNavigation();
    setupRecipeCards();
    setupModal();
    setupSwipeGestures();
    setupKeyboardNavigation();
    setupExitButton();

    // Handle browser back/forward
    window.addEventListener('popstate', handlePopState);

    // Initial history entry
    history.replaceState({ screen: 'menu' }, '', '');

    console.log('☕ Stewart Coffee App loaded successfully!');
}

/**
 * Setup navigation buttons using event delegation
 */
function setupNavigation() {
    document.addEventListener('click', (e) => {
        const navButton = e.target.closest('[data-navigate]');
        if (navButton) {
            const targetScreen = navButton.dataset.navigate;
            navigateTo(targetScreen);
            triggerHaptic();
        }
    });
}

/**
 * Setup recipe card interactions
 */
function setupRecipeCards() {
    document.addEventListener('click', (e) => {
        const recipeCard = e.target.closest('[data-recipe]');
        if (recipeCard) {
            const recipeId = recipeCard.dataset.recipe;
            openRecipe(recipeId);
            triggerHaptic();
        }
    });

    // Keyboard support for recipe cards
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const recipeCard = e.target.closest('[data-recipe]');
            if (recipeCard) {
                e.preventDefault();
                const recipeId = recipeCard.dataset.recipe;
                openRecipe(recipeId);
            }
        }
    });
}

/**
 * Setup modal interactions
 */
function setupModal() {
    // Close button
    elements.modalClose?.addEventListener('click', closeRecipe);

    // Click outside to close
    elements.modal?.addEventListener('click', (e) => {
        if (e.target === elements.modal) {
            closeRecipe();
        }
    });

    // Handle escape key for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && state.isModalOpen) {
            closeRecipe();
        }
    });
}

/**
 * Navigate to a screen with animation
 * Uses a flat history model: menu is home, one level deep to sub-pages
 */
function navigateTo(screenId, addToHistory = true) {
    const currentScreen = document.querySelector('.screen.active');
    const targetScreen = document.getElementById(screenId);

    if (!targetScreen || currentScreen === targetScreen) return;

    // Use View Transitions API if available
    if (document.startViewTransition) {
        document.startViewTransition(() => {
            performNavigation(currentScreen, targetScreen);
        });
    } else {
        performNavigation(currentScreen, targetScreen);
    }

    const previousScreen = state.currentScreen;
    state.currentScreen = screenId;

    // Flat history management:
    // - Menu is the base (home screen)
    // - Sub-pages replace state so back always returns to menu
    if (addToHistory) {
        if (previousScreen === 'menu' && screenId !== 'menu' && screenId !== 'exit-screen') {
            // Going from menu to a sub-page: push state
            history.pushState({ screen: screenId }, '', '');
        } else if (screenId === 'menu') {
            // Going back to menu: use history.back if we can, otherwise just navigate
            if (previousScreen !== 'menu' && previousScreen !== 'exit-screen') {
                history.back();
            }
        } else {
            // Navigating between sub-pages: replace state (keeps history flat)
            history.replaceState({ screen: screenId }, '', '');
        }
    }
}

/**
 * Perform the actual navigation DOM changes
 */
function performNavigation(currentScreen, targetScreen) {
    if (currentScreen) {
        currentScreen.classList.remove('active');
    }
    targetScreen.classList.add('active');
    targetScreen.scrollTo({ top: 0, behavior: 'instant' });
}

/**
 * Handle browser back/forward navigation
 * With flat history, back always goes to menu (home)
 */
function handlePopState(e) {
    // Close modal if open first
    if (state.isModalOpen) {
        closeRecipe();
        // Push state back to prevent actual navigation
        history.pushState({ screen: state.currentScreen }, '', '');
        return;
    }

    // Get target screen from state (defaults to menu)
    const screenId = e.state?.screen ?? 'menu';
    
    // Perform navigation without history manipulation
    const currentScreen = document.querySelector('.screen.active');
    const targetScreen = document.getElementById(screenId);
    
    if (targetScreen && currentScreen !== targetScreen) {
        performNavigation(currentScreen, targetScreen);
        state.currentScreen = screenId;
    }
}

/**
 * Open recipe modal with details
 */
function openRecipe(recipeId) {
    const recipe = recipes[recipeId];
    if (!recipe) return;

    // Generate steps HTML
    const stepsHtml = recipe.steps
        .map((step, index) => `
            <div class="recipe-step">
                <div class="step-number" aria-hidden="true">${index + 1}</div>
                <div class="step-content">
                    <h4>${escapeHtml(step.title)}</h4>
                    <p>${escapeHtml(step.desc)}</p>
                </div>
            </div>
        `)
        .join('');

    // Update modal content
    elements.recipeDetail.innerHTML = `
        <h2 id="modal-title">${escapeHtml(recipe.title)}</h2>
        ${stepsHtml}
        <div class="pro-tip">
            <h4>💡 Pro Tip</h4>
            <p>${escapeHtml(recipe.tip)}</p>
        </div>
    `;

    // Show modal using native dialog API
    elements.modal?.showModal();
    state.isModalOpen = true;

    // Reinitialize Lucide icons for modal content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Push history entry for modal
    history.pushState({ screen: state.currentScreen, modal: recipeId }, '', '');
}

/**
 * Close recipe modal
 */
function closeRecipe() {
    elements.modal?.close();
    state.isModalOpen = false;
}

/**
 * Setup swipe gestures for navigation
 */
function setupSwipeGestures() {
    const SWIPE_THRESHOLD = 80;
    const SWIPE_VELOCITY_THRESHOLD = 0.3;

    let touchStartTime = 0;

    document.addEventListener('touchstart', (e) => {
        state.touchStartX = e.touches[0].clientX;
        state.touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        if (state.isModalOpen) return;

        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const deltaX = touchEndX - state.touchStartX;
        const deltaY = touchEndY - state.touchStartY;
        const deltaTime = Date.now() - touchStartTime;
        const velocity = Math.abs(deltaX) / deltaTime;

        // Only trigger if horizontal swipe is dominant
        if (Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
            // Swipe right to go back
            if (deltaX > SWIPE_THRESHOLD && velocity > SWIPE_VELOCITY_THRESHOLD) {
                const currentScreen = document.querySelector('.screen.active');
                const parentScreen = currentScreen?.dataset.parent;
                
                if (parentScreen) {
                    navigateTo(parentScreen);
                    triggerHaptic();
                }
                // Don't allow swipe-back from menu (it's the home screen now)
            }
        }
    }, { passive: true });
}

/**
 * Setup keyboard navigation
 */
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Alt + Left Arrow to go back
        if (e.altKey && e.key === 'ArrowLeft') {
            e.preventDefault();
            const currentScreen = document.querySelector('.screen.active');
            const parentScreen = currentScreen?.dataset.parent;
            
            if (parentScreen) {
                navigateTo(parentScreen);
            }
            // Menu is home, no further back
        }
    });
}

/**
 * Setup exit button
 */
function setupExitButton() {
    const exitBtn = document.getElementById('exit-btn');
    if (exitBtn) {
        exitBtn.addEventListener('click', exitApp);
    }
}

/**
 * Exit the app
 * Shows exit screen with option to return
 */
function exitApp() {
    triggerHaptic();
    
    // Navigate to exit screen
    navigateTo('exit-screen', false);
    
    // Replace history so back button returns to menu
    history.replaceState({ screen: 'menu' }, '', '');
}

/**
 * Trigger haptic feedback if available
 */
function triggerHaptic() {
    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Prevent double-tap zoom on iOS
 */
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, { passive: false });

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Register service worker for offline support (if available)
if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed, app still works
    });
}
