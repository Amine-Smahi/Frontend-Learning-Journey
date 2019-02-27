# Form-BootstrapValidator
A simple form with jQuery plugin to validate form fields. Designed to use with Bootstrap 3
Usage
 <h3>Including library</h3>
        Since the BootstrapValidator plugin requires jQuery and Bootstrap 3, you have to include the required CSS and JS files to your page:

<div class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;link</span> <span class="na">rel=</span><span class="s">&quot;stylesheet&quot;</span> <span class="na">href=</span><span class="s">&quot;/path/to/bootstrap/css/bootstrap.css&quot;</span><span class="nt">/&gt;</span>
<span class="nt">&lt;link</span> <span class="na">rel=</span><span class="s">&quot;stylesheet&quot;</span> <span class="na">href=</span><span class="s">&quot;/path/to/dist/css/bootstrapValidator.min.css&quot;</span><span class="nt">/&gt;</span>

<span class="nt">&lt;script </span><span class="na">type=</span><span class="s">&quot;text/javascript&quot;</span> <span class="na">src=</span><span class="s">&quot;/path/to/jquery/jquery-1.10.2.min.js&quot;</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">type=</span><span class="s">&quot;text/javascript&quot;</span> <span class="na">src=</span><span class="s">&quot;/path/to/bootstrap/js/bootstrap.min.js&quot;</span><span class="nt">&gt;&lt;/script&gt;</span></code></pre></div>

 #### Next, requires the plugin javascript file:


<div class="highlight"><pre><code class="language-html" data-lang="html"><span class="c">&lt;!-- Either use the compressed version (recommended in the production site) --&gt;</span>
<span class="nt">&lt;script </span><span class="na">type=</span><span class="s">&quot;text/javascript&quot;</span> <span class="na">src=</span><span class="s">&quot;/path/to/dist/js/bootstrapValidator.min.js&quot;</span><span class="nt">&gt;&lt;/script&gt;</span>

<span class="c">&lt;!-- Or use the original one with all validators included --&gt;</span>
<span class="nt">&lt;script </span><span class="na">type=</span><span class="s">&quot;text/javascript&quot;</span> <span class="na">src=</span><span class="s">&quot;/path/to/dist/js/bootstrapValidator.js&quot;</span><span class="nt">&gt;&lt;/script&gt;</span>

<span class="c">&lt;!-- Or use the plugin with required validators --&gt;</span>
<span class="nt">&lt;script </span><span class="na">type=</span><span class="s">&quot;text/javascript&quot;</span> <span class="na">src=</span><span class="s">&quot;/path/to/src/js/bootstrapValidator.js&quot;</span><span class="nt">&gt;&lt;/script&gt;</span>
<span class="nt">&lt;script </span><span class="na">type=</span><span class="s">&quot;text/javascript&quot;</span> <span class="na">src=</span><span class="s">&quot;/path/to/src/js/validator/...validator...&quot;</span><span class="nt">&gt;&lt;/script&gt;</span></code></pre></div>

 <p>If you want to use the default message translated in the <a href="#language-package">language package</a>, then finally include it:</p>
        
<div class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;script </span><span class="na">type=</span><span class="s">&quot;text/javascript&quot;</span> <span class="na">src=</span><span class="s">&quot;/path/to/src/js/language/languagecode_COUNTRYCODE.js&quot;</span><span class="nt">&gt;&lt;/script&gt;</span></code></pre></div>

  You don't need to require the English package because it is already included in the plugin. The package is available here just for translating into other languages.
       
 <h3>Writing form</h3>
 <p>Since BootstrapValidator is designed to use with Bootstrap, your form must be structured using Bootstrap classes.</p>

   <p>If your form is NOT structured by Bootstrap classes (the element containing field and associated label does NOT have form-group class), you will see the following error in the Console:</p>
<div class="highlight"><pre><code class="language-html" data-lang="html">// Chrome
Uncaught RangeError: Maximum call stack size exceeded

// Firefox
Too much recursion error</code></pre></div>


<h3>For More Information :</h3>
<p>Visit : <a href="http://bootstrapvalidator.votintsev.ru/getting-started/">http://bootstrapvalidator.votintsev.ru/getting-started/</a></p>



<h3>Some Screenshots</h3>




![html javascript bootstrap validator form](https://cloud.githubusercontent.com/assets/24621701/25408966/f4ad1c2c-2a07-11e7-83de-c6221db5fea5.png)
